const ExportToWord = (sourceHTML) => {
  const downloadDoc = async () => {
    const preHtml = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML To Doc</title></head><body>";
    const postHtml = "</body></html>";
    const html = preHtml + sourceHTML + postHtml;
    const blob = new Blob(['\ufeff', html], { type: 'application/msword' });
    const url = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(html);
    const fileNameWithExtension = 'document.doc';
    const downloadLink = document.createElement("a");
    document.body.appendChild(downloadLink);
    if (navigator.msSaveOrOpenBlob) {
      navigator.msSaveOrOpenBlob(blob, fileNameWithExtension);
    } else {
      downloadLink.href = url;
      downloadLink.download = fileNameWithExtension;
      downloadLink.click();
    }
    document.body.removeChild(downloadLink);
  };

  return (
    <button onClick={downloadDoc}>Export to Word</button>
  );
};

export default ExportToWord;
