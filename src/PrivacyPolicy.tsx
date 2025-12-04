import React from "react";

function PrivacyPolicy() {
  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h1>Privacy Policy</h1>
      <p>Last updated: {new Date().toLocaleDateString()}</p>

      <p>
        This Privacy Policy explains how this website collects, uses, and
        protects your information. By using this website, you agree to the
        practices described below.
      </p>

      <h2>Information We Collect</h2>
      <p>
        This website does not collect personal information such as your name,
        email, address, or financial data.
      </p>

      <p>
        However, anonymous data such as browser type, device information, and
        usage statistics may be collected through standard web analytics tools
        (e.g., Google Analytics) or advertising platforms (e.g., Google AdSense).
      </p>

      <h2>Use of Cookies</h2>
      <p>
        Cookies may be used to improve user experience and support advertising
        features. You can disable cookies in your browser at any time.
      </p>

      <h2>Third-Party Services</h2>
      <p>
        This website may use third-party services such as Google AdSense or
        Google Analytics. These services may use cookies or tracking technologies
        to deliver personalized ads or measure performance.
      </p>

      <h2>Data Protection</h2>
      <p>
        We do not sell, share, or store any personal data. All anonymous
        analytics data is used solely to improve the website.
      </p>

      <h2>Links to Other Websites</h2>
      <p>
        This site may contain links to external websites. We are not responsible
        for the content or privacy practices of those sites.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        This Privacy Policy may be updated periodically. Continued use of the
        site means you accept any changes.
      </p>

      <h2>Contact</h2>
      <p>
        If you have any questions, you can contact the site administrator at:
        <br />
        <strong>palmerchristian873@gmail.com</strong> (replace this later)
      </p>
    </div>
  );
}

export default PrivacyPolicy;
