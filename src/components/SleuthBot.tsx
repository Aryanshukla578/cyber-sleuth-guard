
import React, { useState, useEffect, useRef } from "react";
import { Bot, Shield, ShieldAlert, FileText, Download, CircleX, CircleCheck, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { toast } from "@/hooks/use-toast";
import { mockScanResults, VulnerabilityType, ScanResult, Vulnerability } from "@/utils/scanMocks";

type Message = {
  id: string;
  text: string;
  sender: "user" | "bot";
  vulnerabilityType?: VulnerabilityType;
};

type ScanState = "idle" | "scanning" | "complete";

interface SleuthBotProps {
  onClose?: () => void;
  initialUrl?: string;
  fullScreen?: boolean;
}

const SleuthBot: React.FC<SleuthBotProps> = ({ onClose, initialUrl = "", fullScreen = false }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      text: "Hello! I'm SleuthBot, your AI cybersecurity assistant. Enter a URL to begin scanning for vulnerabilities.",
      sender: "bot",
    },
  ]);
  const [inputValue, setInputValue] = useState(initialUrl);
  const [scanState, setScanState] = useState<ScanState>("idle");
  const [scanProgress, setScanProgress] = useState(0);
  const [scanResults, setScanResults] = useState<ScanResult | null>(null);
  const [showTechnicalDetails, setShowTechnicalDetails] = useState<Record<string, boolean>>({});
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Start scan automatically if initialUrl is provided
  useEffect(() => {
    if (initialUrl && initialUrl !== "" && scanState === "idle") {
      startScan();
    }
  }, [initialUrl]);

  const startScan = () => {
    if (!inputValue.trim()) {
      toast({
        title: "Error",
        description: "Please enter a valid URL to scan",
        variant: "destructive",
      });
      return;
    }

    // Check for valid URL format
    try {
      new URL(inputValue.startsWith('http') ? inputValue : `https://${inputValue}`);
    } catch (e) {
      toast({
        title: "Invalid URL",
        description: "Please enter a valid URL (e.g., example.com)",
        variant: "destructive",
      });
      return;
    }

    setScanState("scanning");
    setScanProgress(0);
    setScanResults(null);
    setShowTechnicalDetails({});

    const url = inputValue.startsWith('http') ? inputValue : `https://${inputValue}`;
    
    setMessages(prev => [
      ...prev,
      { id: `user-${Date.now()}`, text: url, sender: "user" },
      { id: `bot-${Date.now()}-1`, text: `Initiating scan for ${url}...`, sender: "bot" }
    ]);

    simulateScan(url);
  };

  const simulateScan = (url: string) => {
    const scanStages = [
      { message: "Analyzing domain and DNS records...", progress: 10, delay: 1500 },
      { message: "Scanning for open ports and services...", progress: 25, delay: 2000 },
      { message: "Checking SSL/TLS configuration...", progress: 35, delay: 1800 },
      { message: "Analyzing HTTP headers and security policies...", progress: 50, delay: 2200 },
      { message: "Testing for common web vulnerabilities (XSS, SQLi)...", progress: 65, delay: 2500 },
      { message: "Checking for sensitive data exposure...", progress: 80, delay: 1700 },
      { message: "Finalizing vulnerability report...", progress: 95, delay: 1500 }
    ];

    let currentDelay = 0;
    
    scanStages.forEach((stage, index) => {
      currentDelay += stage.delay;
      
      setTimeout(() => {
        setScanProgress(stage.progress);
        setMessages(prev => [
          ...prev,
          { id: `bot-scan-${Date.now()}-${index}`, text: stage.message, sender: "bot" }
        ]);
      }, currentDelay);
    });

    // Complete scan and show results
    setTimeout(() => {
      setScanProgress(100);
      setScanState("complete");
      
      // Get mock results for the scanned URL
      const results = mockScanResults(url);
      setScanResults(results);

      // Show summary message
      const highSeverity = results.vulnerabilities.filter(v => v.severity === "high").length;
      const mediumSeverity = results.vulnerabilities.filter(v => v.severity === "medium").length;
      const lowSeverity = results.vulnerabilities.filter(v => v.severity === "low").length;

      const summaryMessage = highSeverity > 0
        ? `🚨 Scan complete. Found ${highSeverity} high, ${mediumSeverity} medium, and ${lowSeverity} low severity issues.`
        : mediumSeverity > 0
        ? `⚠️ Scan complete. Found ${mediumSeverity} medium and ${lowSeverity} low severity issues.`
        : lowSeverity > 0
        ? `ℹ️ Scan complete. Found ${lowSeverity} low severity issues.`
        : `✅ Scan complete. No vulnerabilities detected. Nice work!`;

      setMessages(prev => [
        ...prev,
        { id: `bot-summary-${Date.now()}`, text: summaryMessage, sender: "bot" }
      ]);

      // Add security score message
      if (results.summary) {
        const scoreEmoji = results.summary.score >= 80 
          ? '🟢' 
          : results.summary.score >= 50 
          ? '🟠' 
          : '🔴';
          
        setTimeout(() => {
          setMessages(prev => [
            ...prev,
            { id: `bot-score-${Date.now()}`, text: `${scoreEmoji} Security Score: ${results.summary?.score}/100`, sender: "bot" }
          ]);
        }, 800);
      }

      // Add detailed vulnerability messages
      results.vulnerabilities.forEach((vuln, index) => {
        setTimeout(() => {
          setMessages(prev => [
            ...prev,
            { 
              id: `bot-vuln-${Date.now()}-${index}`, 
              text: `${getSeverityIcon(vuln.severity)} ${vuln.name}: ${vuln.description}`, 
              sender: "bot",
              vulnerabilityType: vuln.type
            }
          ]);
        }, 800 * (index + 1) + 1000);
      });

      // Final message after all vulnerabilities
      setTimeout(() => {
        setMessages(prev => [
          ...prev,
          { 
            id: `bot-final-${Date.now()}`, 
            text: "Scan report is ready! You can view detailed findings below or download the complete report.", 
            sender: "bot"
          }
        ]);
      }, 800 * (results.vulnerabilities.length + 1) + 1200);
      
    }, currentDelay + 2000);
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case "high":
        return "🔴";
      case "medium":
        return "🟠";
      case "low":
        return "🟡";
      default:
        return "ℹ️";
    }
  };

  const toggleTechnicalDetails = (vulnId: string) => {
    setShowTechnicalDetails(prev => ({
      ...prev,
      [vulnId]: !prev[vulnId]
    }));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && scanState === 'idle') {
      startScan();
    }
  };

  const downloadReport = () => {
    if (!scanResults) return;
    
    // Create a simple report text
    let reportText = `# Cyber Sleuth Guard Security Report\n\n`;
    reportText += `URL: ${scanResults.url}\n`;
    reportText += `Scan Date: ${new Date(scanResults.scanDate).toLocaleString()}\n\n`;
    reportText += `## Security Score: ${scanResults.summary?.score}/100\n\n`;
    reportText += `## Vulnerabilities Found: ${scanResults.vulnerabilities.length}\n\n`;
    
    scanResults.vulnerabilities.forEach((vuln, i) => {
      reportText += `### ${i+1}. ${vuln.name} (${vuln.severity.toUpperCase()})\n`;
      reportText += `Type: ${vuln.type}\n`;
      reportText += `Description: ${vuln.description}\n`;
      reportText += `Recommendation: ${vuln.recommendation}\n`;
      
      if (vuln.technicalDetails) {
        reportText += `Technical Details: ${vuln.technicalDetails}\n`;
      }
      
      if (vuln.affectedEndpoint) {
        reportText += `Affected Endpoint: ${vuln.affectedEndpoint}\n`;
      }
      
      reportText += '\n';
    });

    if (scanResults.safePractices && scanResults.safePractices.length > 0) {
      reportText += '## Good Security Practices Detected\n\n';
      scanResults.safePractices.forEach((practice, i) => {
        reportText += `${i+1}. ${practice}\n`;
      });
      reportText += '\n';
    }
    
    // Create and download the file
    const blob = new Blob([reportText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `security-report-${new Date().getTime()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast({
      title: "Report Downloaded",
      description: "Your security report has been downloaded",
    });
  };

  const resetScan = () => {
    setInputValue("");
    setScanState("idle");
    setScanProgress(0);
    setScanResults(null);
    setShowTechnicalDetails({});
    
    // Add reset message
    setMessages(prev => [
      ...prev,
      { id: `bot-reset-${Date.now()}`, text: "Ready to scan another URL. What would you like to check next?", sender: "bot" }
    ]);
  };

  return (
    <div className={`${fullScreen ? 'flex flex-col h-full bg-slate-900' : 'fixed bottom-24 right-6 w-[85vw] sm:w-[450px] bg-slate-900 border border-slate-700 rounded-xl shadow-xl z-50 flex flex-col'} ${fullScreen ? '' : 'max-h-[80vh]'}`}>
      {/* Header */}
      <div className="flex items-center justify-between bg-slate-800 p-4 rounded-t-xl border-b border-slate-700">
        <div className="flex items-center">
          <div className="bg-cyan-500 p-2 rounded-full mr-3">
            <Shield size={16} className="text-white" />
          </div>
          <span className="font-medium text-white">SleuthBot</span>
          {scanState === "scanning" && (
            <div className="ml-2 text-xs bg-cyan-800 text-cyan-100 px-2 py-1 rounded-full inline-flex items-center">
              <Zap size={12} className="mr-1 animate-pulse" /> Scanning
            </div>
          )}
        </div>
        {!fullScreen && (
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
            <CircleX size={20} />
          </button>
        )}
      </div>

      {/* Messages container */}
      <div className="flex-grow overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            {message.sender === "bot" && (
              <div className="bg-slate-700 p-1 rounded-full h-8 w-8 flex items-center justify-center mr-2 mt-1">
                <Bot size={16} className="text-cyan-400" />
              </div>
            )}
            <div
              className={`max-w-[80%] p-3 rounded-lg ${
                message.sender === "user"
                  ? "bg-cyan-600 text-white"
                  : "bg-slate-800 text-gray-200"
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Scan progress bar */}
      {scanState === "scanning" && (
        <div className="px-4 pb-2">
          <Progress value={scanProgress} className="h-2 bg-slate-700" />
          <p className="text-xs text-gray-400 mt-1">Scanning: {scanProgress}% complete</p>
        </div>
      )}

      {/* Vulnerability report cards */}
      {scanState === "complete" && scanResults && fullScreen && (
        <div className="p-4 bg-slate-800/50 border-t border-slate-700">
          <h3 className="text-lg font-semibold text-white mb-4">Detected Vulnerabilities</h3>
          
          {scanResults.vulnerabilities.length === 0 ? (
            <div className="p-4 bg-slate-700/50 rounded-lg border border-slate-600 text-center">
              <CircleCheck className="mx-auto mb-2 text-green-500" size={24} />
              <p className="text-white">No vulnerabilities detected. Good job!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {scanResults.vulnerabilities.map((vuln) => (
                <Card key={vuln.id} className="bg-slate-800 border border-slate-700">
                  <div className="p-4">
                    <div className="flex items-center mb-2">
                      <div className={`w-3 h-3 rounded-full mr-2 ${
                        vuln.severity === 'high' ? 'bg-red-500' 
                        : vuln.severity === 'medium' ? 'bg-orange-500' 
                        : 'bg-yellow-500'
                      }`}></div>
                      <h4 className="text-white font-semibold">{vuln.name}</h4>
                    </div>
                    
                    <p className="text-gray-300 text-sm mb-2">{vuln.description}</p>
                    
                    {vuln.affectedEndpoint && (
                      <div className="text-sm mb-2">
                        <span className="text-gray-400">Affected endpoint: </span>
                        <code className="bg-slate-700 px-1 rounded text-cyan-300">{vuln.affectedEndpoint}</code>
                      </div>
                    )}
                    
                    <div className="bg-slate-700/50 p-2 rounded text-gray-300 text-sm mb-2">
                      <span className="text-cyan-400">Recommendation: </span>
                      {vuln.recommendation}
                    </div>
                    
                    <Button 
                      variant="ghost" 
                      className="text-xs text-gray-400"
                      onClick={() => toggleTechnicalDetails(vuln.id)}
                    >
                      {showTechnicalDetails[vuln.id] ? 'Hide Technical Details' : 'Show Technical Details'}
                    </Button>
                    
                    {showTechnicalDetails[vuln.id] && vuln.technicalDetails && (
                      <div className="mt-2 p-2 bg-slate-900 rounded-md border border-slate-700 overflow-x-auto">
                        <code className="text-xs text-gray-300 whitespace-pre-wrap">{vuln.technicalDetails}</code>
                      </div>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          )}
          
          <div className="mt-4 flex gap-2">
            <Button 
              className="flex-1 bg-slate-700 hover:bg-slate-600 text-white"
              onClick={downloadReport}
            >
              <Download size={16} className="mr-2" /> Download Report
            </Button>
            <Button 
              variant="outline" 
              className="flex-1 border-slate-700 text-gray-300 hover:text-white hover:bg-slate-800"
              onClick={resetScan}
            >
              Scan Another URL
            </Button>
          </div>
        </div>
      )}

      {/* Report download button (for chat view) */}
      {scanState === "complete" && scanResults && !fullScreen && (
        <div className="p-4 border-t border-slate-700">
          <Button 
            className="w-full mb-2 bg-slate-700 hover:bg-slate-600 text-white"
            onClick={downloadReport}
          >
            <Download size={16} className="mr-2" /> Download Report
          </Button>
          <Button 
            variant="ghost" 
            className="w-full text-gray-300 hover:text-white hover:bg-slate-800"
            onClick={resetScan}
          >
            Scan Another URL
          </Button>
        </div>
      )}

      {/* Input */}
      {scanState === "idle" && (
        <div className="p-4 border-t border-slate-700">
          <div className="flex">
            <Input
              type="text"
              placeholder="Enter URL to scan (e.g., example.com)"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-grow mr-2 bg-slate-800 border-slate-700 text-white"
            />
            <Button onClick={startScan} className="bg-cyan-600 hover:bg-cyan-700 text-white">
              Scan
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SleuthBot;
