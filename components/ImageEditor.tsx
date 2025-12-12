import React, { useState, useRef, useCallback } from 'react';
import { Upload, Sparkles, Loader2, Download, RefreshCw, Image as ImageIcon } from 'lucide-react';
import { editImageWithGemini } from '../services/geminiService';

const ImageEditor: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [generatedUrl, setGeneratedUrl] = useState<string | null>(null);
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      setGeneratedUrl(null);
      setError(null);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.type.startsWith('image/')) {
        setSelectedFile(file);
        setPreviewUrl(URL.createObjectURL(file));
        setGeneratedUrl(null);
        setError(null);
      }
    }
  };

  const convertFileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        if (typeof reader.result === 'string') {
            // Remove data:image/png;base64, prefix for the API if needed, 
            // but for Gemini we need the raw base64 data usually. 
            // The split helps extract just the base64 part.
            const base64Data = reader.result.split(',')[1];
            resolve(base64Data);
        } else {
            reject(new Error("Failed to read file"));
        }
      };
      reader.onerror = error => reject(error);
    });
  };

  const handleGenerate = async () => {
    if (!selectedFile || !prompt) return;

    setIsLoading(true);
    setError(null);

    try {
      const base64Data = await convertFileToBase64(selectedFile);
      const result = await editImageWithGemini(base64Data, selectedFile.type, prompt);
      
      if (result) {
        setGeneratedUrl(result);
      } else {
        setError("Failed to generate image. Please try a different prompt.");
      }
    } catch (err: any) {
        console.error(err);
        setError(err.message || "Something went wrong during generation.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div id="editor" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Eco-Vision AI Studio</h2>
          <p className="mt-4 text-lg text-slate-600">
            Visualize a greener world. Use our AI to transform your photos with sustainability themes or artistic filters.
          </p>
          <div className="mt-2 text-sm text-emerald-600 font-medium bg-emerald-50 inline-block px-3 py-1 rounded-full border border-emerald-100">
            Powered by Gemini 2.5 Flash Image
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Input Section */}
            <div className="p-8 border-b lg:border-b-0 lg:border-r border-slate-200 bg-slate-50/50">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">1. Upload Image</label>
                  <div 
                    onClick={() => fileInputRef.current?.click()}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={handleDrop}
                    className={`
                        cursor-pointer group relative border-2 border-dashed rounded-2xl p-8 transition-all
                        flex flex-col items-center justify-center text-center h-64
                        ${previewUrl ? 'border-emerald-400 bg-emerald-50/30' : 'border-slate-300 hover:border-emerald-400 hover:bg-white'}
                    `}
                  >
                    <input 
                        type="file" 
                        ref={fileInputRef} 
                        onChange={handleFileSelect} 
                        className="hidden" 
                        accept="image/*"
                    />
                    
                    {previewUrl ? (
                        <div className="relative w-full h-full">
                             <img 
                                src={previewUrl} 
                                alt="Preview" 
                                className="w-full h-full object-contain rounded-lg"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-lg">
                                <p className="text-white font-medium flex items-center gap-2">
                                    <RefreshCw className="w-4 h-4" /> Change Image
                                </p>
                            </div>
                        </div>
                    ) : (
                        <>
                            <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mb-4 group-hover:scale-110 transition-transform">
                                <Upload className="w-8 h-8" />
                            </div>
                            <p className="text-sm font-medium text-slate-900">Click to upload or drag and drop</p>
                            <p className="text-xs text-slate-500 mt-1">SVG, PNG, JPG or GIF (max 800x400px recommended)</p>
                        </>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">2. Describe your edit</label>
                  <div className="relative">
                    <input
                      type="text"
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      placeholder="e.g., 'Add a futuristic solar panel roof' or 'Make it look like a cyberpunk city'"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all pr-12"
                    />
                    <Sparkles className="absolute right-4 top-1/2 -translate-y-1/2 text-emerald-500 w-5 h-5" />
                  </div>
                </div>

                <button
                  onClick={handleGenerate}
                  disabled={!selectedFile || !prompt || isLoading}
                  className={`
                    w-full py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2 transition-all shadow-lg
                    ${!selectedFile || !prompt || isLoading 
                        ? 'bg-slate-300 cursor-not-allowed shadow-none' 
                        : 'bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 shadow-emerald-200 hover:shadow-emerald-300 transform hover:-translate-y-0.5'}
                  `}
                >
                  {isLoading ? (
                    <>
                        <Loader2 className="w-5 h-5 animate-spin" /> Processing...
                    </>
                  ) : (
                    <>
                        <Sparkles className="w-5 h-5" /> Generate Magic
                    </>
                  )}
                </button>
                
                {error && (
                    <div className="p-4 bg-red-50 text-red-600 text-sm rounded-xl border border-red-100">
                        {error}
                    </div>
                )}
              </div>
            </div>

            {/* Output Section */}
            <div className="p-8 bg-slate-100/50 flex flex-col h-full min-h-[500px]">
              <label className="block text-sm font-medium text-slate-700 mb-2">3. Result</label>
              <div className="flex-1 rounded-2xl border-2 border-dashed border-slate-300 bg-white flex items-center justify-center relative overflow-hidden">
                {isLoading ? (
                    <div className="text-center">
                        <div className="inline-block relative w-20 h-20">
                            <div className="absolute inset-0 rounded-full border-4 border-emerald-100"></div>
                            <div className="absolute inset-0 rounded-full border-4 border-emerald-500 border-t-transparent animate-spin"></div>
                        </div>
                        <p className="mt-4 text-slate-600 font-medium animate-pulse">AI is reimagining your image...</p>
                    </div>
                ) : generatedUrl ? (
                    <img 
                        src={generatedUrl} 
                        alt="Generated" 
                        className="w-full h-full object-contain"
                    />
                ) : (
                    <div className="text-center text-slate-400 p-8">
                        <ImageIcon className="w-16 h-16 mx-auto mb-4 opacity-50" />
                        <p>Your eco-friendly masterpiece will appear here</p>
                    </div>
                )}
              </div>

              {generatedUrl && (
                <div className="mt-6 flex justify-end">
                    <a 
                        href={generatedUrl} 
                        download={`greencoin-edit-${Date.now()}.png`}
                        className="px-6 py-2 bg-white border border-slate-200 rounded-lg text-slate-700 font-medium hover:bg-slate-50 hover:text-emerald-600 transition-colors flex items-center gap-2"
                    >
                        <Download className="w-4 h-4" /> Download Result
                    </a>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageEditor;
