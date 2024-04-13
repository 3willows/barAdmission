import { TailwindStyles } from "../helper/TailwindStyles.html";

export function exportHTML(sourceRef) {
  const sourceHTML = sourceRef.current.innerHTML;

  const header =
    `<html xmlns:o='urn:schemas-microsoft-com:office:office' ` +
    `xmlns:w='urn:schemas-microsoft-com:office:word' ` +
    `xmlns='http://www.w3.org/TR/REC-html40'>` +
    `<head><meta charset='utf-8'><title>Export HTML to Word Document with JavaScript</title>` +
    TailwindStyles +
    `</head><body>`;

  const footer = "</body></html>";

  const fullHTML = header + sourceHTML + footer;

  const source =
    "data:application/vnd.ms-word;charset=utf-8," +
    encodeURIComponent(fullHTML);

  const fileDownload = document.createElement("a");
  document.body.appendChild(fileDownload);
  fileDownload.href = source;
  fileDownload.download = "Barrister Admission Bundle (beta).doc";

  fileDownload.click();

  document.body.removeChild(fileDownload);
}