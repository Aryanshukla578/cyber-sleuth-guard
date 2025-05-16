
// Vulnerability Type Enum
export enum VulnerabilityType {
  XSS = "Cross-Site Scripting (XSS)",
  SQLI = "SQL Injection",
  CSRF = "Cross-Site Request Forgery",
  OPEN_REDIRECT = "Open Redirect",
  INSECURE_HEADERS = "Missing Security Headers",
  OUTDATED_SOFTWARE = "Outdated Software/Libraries",
  SENSITIVE_DATA = "Sensitive Data Exposure",
  SSL_ISSUES = "SSL/TLS Issues",
  MISCONFIGURATION = "Server Misconfiguration",
  OTHER = "Other Vulnerability",
}

export type Vulnerability = {
  id: string;
  name: string;
  description: string;
  severity: "high" | "medium" | "low";
  recommendation: string;
  type: VulnerabilityType;
  technicalDetails?: string;
  affectedEndpoint?: string;
};

export type ScanResult = {
  url: string;
  scanDate: string;
  vulnerabilities: Vulnerability[];
  safePractices?: string[];
  summary?: {
    highCount: number;
    mediumCount: number;
    lowCount: number;
    score: number;
  };
};

// Function to generate realistic but mock scan results
export const mockScanResults = (url: string): ScanResult => {
  const mockVulnerabilities: Vulnerability[] = [];
  const safePractices: string[] = [];
  
  // Parse the domain from URL for more targeted mocks
  let domain = url.replace(/^https?:\/\//, '').split('/')[0];
  
  // Generate 0-5 vulnerabilities based on mock logic
  const numVulnerabilities = Math.floor(Math.random() * 6);
  
  // Add XSS vulnerability (common in forms)
  if (url.includes('contact') || url.includes('form') || Math.random() > 0.7) {
    mockVulnerabilities.push({
      id: "vuln-" + Date.now() + "-1",
      name: "Reflected XSS Vulnerability",
      description: "Input fields on the contact form are not properly sanitized, allowing for potential XSS attacks.",
      severity: "high",
      recommendation: "Implement proper input validation and output encoding. Consider using a library like DOMPurify.",
      type: VulnerabilityType.XSS,
      technicalDetails: "GET parameter 'q' reflects input without sanitization in the search results page.",
      affectedEndpoint: "/contact"
    });
  }
  
  // Add missing security headers (very common)
  if (Math.random() > 0.4) {
    mockVulnerabilities.push({
      id: "vuln-" + Date.now() + "-2",
      name: "Missing Security Headers",
      description: "Important HTTP security headers are not implemented, reducing browser security protections.",
      severity: "medium",
      recommendation: "Add Content-Security-Policy, X-XSS-Protection, X-Content-Type-Options, and Strict-Transport-Security headers.",
      type: VulnerabilityType.INSECURE_HEADERS,
      technicalDetails: "Missing headers: Content-Security-Policy, X-Frame-Options, Strict-Transport-Security",
      affectedEndpoint: "/"
    });
  }

  // SSL Issues
  if (Math.random() > 0.6) {
    mockVulnerabilities.push({
      id: "vuln-" + Date.now() + "-3",
      name: "SSL/TLS Configuration Issues",
      description: "The server supports outdated and insecure TLS protocols (TLS 1.0/1.1).",
      severity: "medium",
      recommendation: "Disable TLS 1.0 and 1.1, only enable TLS 1.2 and 1.3 with secure cipher suites.",
      type: VulnerabilityType.SSL_ISSUES,
      technicalDetails: "Server accepts connections using TLS 1.0 which is deprecated. Weak cipher suites detected: RC4, 3DES.",
      affectedEndpoint: "*"
    });
  }

  // Open redirect
  if (url.includes('redirect') || url.includes('login') || Math.random() > 0.8) {
    mockVulnerabilities.push({
      id: "vuln-" + Date.now() + "-4",
      name: "Open Redirect Vulnerability",
      description: "The application does not properly validate redirect URLs, which can be exploited for phishing attacks.",
      severity: "medium",
      recommendation: "Implement a whitelist of allowed redirect URLs or validate against a known pattern.",
      type: VulnerabilityType.OPEN_REDIRECT,
      technicalDetails: "Parameter 'next' in the login page allows arbitrary redirects to external domains.",
      affectedEndpoint: "/login"
    });
  }

  // Add SQL Injection for admin pages
  if (url.includes('admin') || url.includes('dashboard') || Math.random() > 0.85) {
    mockVulnerabilities.push({
      id: "vuln-" + Date.now() + "-5",
      name: "Potential SQL Injection",
      description: "Database queries may not be properly parameterized, allowing for possible SQL injection attacks.",
      severity: "high",
      recommendation: "Use prepared statements/parameterized queries, ORM libraries, or stored procedures.",
      type: VulnerabilityType.SQLI,
      technicalDetails: "The 'id' parameter in product pages accepts numeric values without proper validation.",
      affectedEndpoint: "/products"
    });
  }
  
  // CSRF vulnerability
  if (url.includes('account') || url.includes('profile') || Math.random() > 0.75) {
    mockVulnerabilities.push({
      id: "vuln-" + Date.now() + "-6",
      name: "CSRF Protection Missing",
      description: "Forms do not implement anti-CSRF tokens, potentially allowing cross-site request forgery attacks.",
      severity: "medium",
      recommendation: "Implement anti-CSRF tokens in all forms that modify data or state.",
      type: VulnerabilityType.CSRF,
      technicalDetails: "The profile update form does not contain a CSRF token or validate the request origin.",
      affectedEndpoint: "/profile"
    });
  }
  
  // Add safe practices to acknowledge
  if (mockVulnerabilities.length <= 2 || Math.random() > 0.5) {
    safePractices.push("HTTPS is properly configured");
  }
  
  if (Math.random() > 0.5) {
    safePractices.push("No directory listing enabled");
  }
  
  if (Math.random() > 0.6) {
    safePractices.push("No sensitive information in robots.txt");
  }
  
  // If we have too many vulnerabilities, trim the list to make it more realistic
  while (mockVulnerabilities.length > numVulnerabilities && mockVulnerabilities.length > 1) {
    mockVulnerabilities.pop();
  }
  
  // Calculate counts and score
  const highCount = mockVulnerabilities.filter(v => v.severity === "high").length;
  const mediumCount = mockVulnerabilities.filter(v => v.severity === "medium").length;
  const lowCount = mockVulnerabilities.filter(v => v.severity === "low").length;
  
  // Calculate security score (0-100, lower is worse)
  const score = Math.max(0, 100 - (highCount * 25 + mediumCount * 10 + lowCount * 2));
  
  // Return the final scan results object
  return {
    url,
    scanDate: new Date().toISOString(),
    vulnerabilities: mockVulnerabilities,
    safePractices,
    summary: {
      highCount,
      mediumCount,
      lowCount,
      score
    }
  };
};
