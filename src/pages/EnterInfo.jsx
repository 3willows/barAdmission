import React, { useRef } from "react";
import { useAppContext } from "../context.jsx";
import { DataInput } from "../components/DataInput.jsx";

import AffidavitOfApplicant from "./AffidavitOfApplicant.jsx";
import AffidavitOfIdentity from "./AffidavitOfIdentity.jsx";
import NoticeOfMotion from "./NoticeOfMotion.jsx";
import CoverLetters from "./CoverLetters.jsx";

const ComponentToPrint = React.forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <NoticeOfMotion />
      <br className="pagebreak"></br>
      <AffidavitOfApplicant />
      <br className="pagebreak"></br>
      <AffidavitOfIdentity />
      <br className="pagebreak"></br>
      <CoverLetters />
    </div>
  );
});

export default function EnterInfo() {
  const { dispatch, idAffidavit, applicantAffidavit } = useAppContext();
  const sourceRef = useRef(null);

  function handleAffidavit(relevantAffidavit, e) {
    if (e.target.checked) {
      dispatch({ type: relevantAffidavit, payload: true });
    } else {
      dispatch({ type: relevantAffidavit, payload: false });
    }
  }

  function exportHTML() {
    // Retrieve the inner HTML from the element using the reference
    const sourceHTML = sourceRef.current.innerHTML;

    // Define the header including a style tag to turn all text red
    const header =
      `<html xmlns:o='urn:schemas-microsoft-com:office:office' ` +
      `xmlns:w='urn:schemas-microsoft-com:office:word' ` +
      `xmlns='http://www.w3.org/TR/REC-html40'>` +
      `<head><meta charset='utf-8'><title>Export HTML to Word Document with JavaScript</title>` +
      `<style>/* ! tailwindcss v3.4.3 | MIT License | https://tailwindcss.com */ /* 1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4) 2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116) */ *, ::before, ::after { box-sizing: border-box; /* 1 */ border-width: 0; /* 2 */ border-style: solid; /* 2 */ border-color: #e5e7eb; /* 2 */ } ::before, ::after { --tw-content: ''; } /* 1. Use a consistent sensible line-height in all browsers. 2. Prevent adjustments of font size after orientation changes in iOS. 3. Use a more readable tab size.  7. Disable tap highlights on iOS */ html, :host { line-height: 1.5; /* 1 */ -webkit-text-size-adjust: 100%; /* 2 */ -moz-tab-size: 4; /* 3 */ tab-size: 4; /* 3 */ font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */ font-feature-settings: normal; /* 5 */ font-variation-settings: normal; /* 6 */ -webkit-tap-highlight-color: transparent; /* 7 */ } /*  */ body { margin: 0; /* 1 */ line-height: inherit; /* 2 */ } /* 1. Add the correct height in Firefox. 2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655) 3. Ensure horizontal rules are visible by default. */ hr { height: 0; /* 1 */ color: inherit; /* 2 */ border-top-width: 1px; /* 3 */ } /* Add the correct text decoration in Chrome, Edge, and Safari. */ abbr:where([title]) { text-decoration: underline dotted; } /* Remove the default font size and weight for headings. */ h1, h2, h3, h4, h5, h6 { font-size: inherit; font-weight: inherit; } /* Reset links to optimize for opt-in styling instead of opt-out. */ a { color: inherit; text-decoration: inherit; } /* Add the correct font weight in Edge and Safari. */ b, strong { font-weight: bolder; } /*  */ code, kbd, samp, pre { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */ font-feature-settings: normal; /* 2 */ font-variation-settings: normal; /* 3 */ font-size: 1em; /* 4 */ } /* Add the correct font size in all browsers. */ small { font-size: 80%; } /* */ sub, sup { font-size: 75%; line-height: 0; position: relative; vertical-align: baseline; } sub { bottom: -0.25em; } sup { top: -0.5em; } /* 1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297) 2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016) 3. Remove gaps between table borders by default. */ table { text-indent: 0; /* 1 */ border-color: inherit; /* 2 */ border-collapse: collapse; /* 3 */ } /* 1. Change the font styles in all browsers. 2. Remove the margin in Firefox and Safari. 3. Remove default padding in all browsers. */ button, input, optgroup, select, textarea { font-family: inherit; /* 1 */ font-feature-settings: inherit; /* 1 */ font-variation-settings: inherit; /* 1 */ font-size: 100%; /* 1 */ font-weight: inherit; /* 1 */ line-height: inherit; /* 1 */ letter-spacing: inherit; /* 1 */ color: inherit; /* 1 */ margin: 0; /* 2 */ padding: 0; /* 3 */ } /* Remove the inheritance of text transform in Edge and Firefox. */ button, select { text-transform: none; } /* 1. Correct the inability to style clickable types in iOS and Safari. 2. Remove default button styles. */ button, input:where([type='button']), input:where([type='reset']), input:where([type='submit']) { -webkit-appearance: button; /* 1 */ background-color: transparent; /* 2 */ background-image: none; /* 2 */ } /* Use the modern Firefox focus style for all focusable elements. */ :-moz-focusring { outline: auto; } /*  */ :-moz-ui-invalid { box-shadow: none; } /* Add the correct vertical alignment in Chrome and Firefox. */ progress { vertical-align: baseline; } /* Correct the cursor style of increment and decrement buttons in Safari. */ ::-webkit-inner-spin-button, ::-webkit-outer-spin-button { height: auto; } /* 1. Correct the odd appearance in Chrome and Safari. 2. Correct the outline style in Safari. */ [type='search'] { -webkit-appearance: textfield; /* 1 */ outline-offset: -2px; /* 2 */ } /* Remove the inner padding in Chrome and Safari on macOS. */ ::-webkit-search-decoration { -webkit-appearance: none; } /* 1. Correct the inability to style clickable types in iOS and Safari. 2.  */ ::-webkit-file-upload-button { -webkit-appearance: button; /* 1 */ font: inherit; /* 2 */ } /* Add the correct display in Chrome and Safari. */ summary { display: list-item; } /* Removes the default spacing and border for appropriate elements. */ blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre { margin: 0; } fieldset { margin: 0; padding: 0; } legend { padding: 0; } ol, ul, menu { list-style: none; margin: 0; padding: 0; } /* Reset default styling for dialogs. */ dialog { padding: 0; } /* Prevent resizing textareas horizontally by default. */ textarea { resize: vertical; } /* 1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300) 2. Set the default placeholder color to the user's configured gray 400 color. */ input::placeholder, textarea::placeholder { opacity: 1; /* 1 */ color: #9ca3af; /* 2 */ } /* Set the default cursor for buttons. */ button, [role="button"] { cursor: pointer; } /* Make sure disabled buttons don't get the pointer cursor. */ :disabled { cursor: default; } /* 1. M. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210) This can trigger a poorly considered lint error in some tools but is included by design. */ img, svg, video, canvas, audio, iframe, embed, object { display: block; /* 1 */ vertical-align: middle; /* 2 */ } /* Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14) */ img, video { max-width: 100%; height: auto; } /* Make elements with the HTML hidden attribute stay hidden by default */ [hidden] { display: none; } *, ::before, ::after{ --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x:  ; --tw-pan-y:  ; --tw-pinch-zoom:  ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position:  ; --tw-gradient-via-position:  ; --tw-gradient-to-position:  ; --tw-ordinal:  ; --tw-slashed-zero:  ; --tw-numeric-figure:  ; --tw-numeric-spacing:  ; --tw-numeric-fraction:  ; --tw-ring-inset:  ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgb(59 130 246 / 0.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur:  ; --tw-brightness:  ; --tw-contrast:  ; --tw-grayscale:  ; --tw-hue-rotate:  ; --tw-invert:  ; --tw-saturate:  ; --tw-sepia:  ; --tw-drop-shadow:  ; --tw-backdrop-blur:  ; --tw-backdrop-brightness:  ; --tw-backdrop-contrast:  ; --tw-backdrop-grayscale:  ; --tw-backdrop-hue-rotate:  ; --tw-backdrop-invert:  ; --tw-backdrop-opacity:  ; --tw-backdrop-saturate:  ; --tw-backdrop-sepia:  ; --tw-contain-size:  ; --tw-contain-layout:  ; --tw-contain-paint:  ; --tw-contain-style: } ::backdrop{ --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x:  ; --tw-pan-y:  ; --tw-pinch-zoom:  ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position:  ; --tw-gradient-via-position:  ; --tw-gradient-to-position:  ; --tw-ordinal:  ; --tw-slashed-zero:  ; --tw-numeric-figure:  ; --tw-numeric-spacing:  ; --tw-numeric-fraction:  ; --tw-ring-inset:  ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgb(59 130 246 / 0.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur:  ; --tw-brightness:  ; --tw-contrast:  ; --tw-grayscale:  ; --tw-hue-rotate:  ; --tw-invert:  ; --tw-saturate:  ; --tw-sepia:  ; --tw-drop-shadow:  ; --tw-backdrop-blur:  ; --tw-backdrop-brightness:  ; --tw-backdrop-contrast:  ; --tw-backdrop-grayscale:  ; --tw-backdrop-hue-rotate:  ; --tw-backdrop-invert:  ; --tw-backdrop-opacity:  ; --tw-backdrop-saturate:  ; --tw-backdrop-sepia:  ; --tw-contain-size:  ; --tw-contain-layout:  ; --tw-contain-paint:  ; --tw-contain-style: } .m-2{ margin: 0.5rem } .m-5{ margin: 1.25rem } .mx-5{ margin-left: 1.25rem; margin-right: 1.25rem } .my-2{ margin-top: 0.5rem; margin-bottom: 0.5rem } .my-4{ margin-top: 1rem; margin-bottom: 1rem } .my-5{ margin-top: 1.25rem; margin-bottom: 1.25rem } .mb-5{ margin-bottom: 1.25rem } .mt-4{ margin-top: 1rem } .mt-5{ margin-top: 1.25rem } .mt-auto{ margin-top: auto } .flex{ display: flex } .grid{ display: grid } .list-decimal{ list-style-type: decimal } .grid-cols-2{ grid-template-columns: repeat(2, minmax(0, 1fr)) } .grid-cols-3{ grid-template-columns: repeat(3, minmax(0, 1fr)) } .grid-cols-4{ grid-template-columns: repeat(4, minmax(0, 1fr)) } .flex-col{ flex-direction: column } .justify-between{ justify-content: space-between } .gap-4{ gap: 1rem } .border{ border-width: 1px } .border-black{ --tw-border-opacity: 1; border-color: rgb(0 0 0 / var(--tw-border-opacity)) } .text-left{ text-align: left } .text-center{ text-align: center } .text-right{ text-align: right } .leading-relaxed{ line-height: 1.625 } @media (min-width: 768px){ .md\:flex{ display: flex } } .pagebreak { page-break-before: always;  border-color: white}</style>` +
      `</head><body>`;

    // Define the footer
    const footer = "</body></html>";

    // Combine header, sourceHTML, and footer
    const fullHTML = header + sourceHTML + footer;

    // Create a data URL for the Word document
    const source =
      "data:application/vnd.ms-word;charset=utf-8," +
      encodeURIComponent(fullHTML);

    // Create an anchor element
    const fileDownload = document.createElement("a");
    document.body.appendChild(fileDownload);
    fileDownload.href = source;
    fileDownload.download = "Barrister Admission Bundle (beta).doc";

    // Trigger the download
    fileDownload.click();

    // Clean up
    document.body.removeChild(fileDownload);
  }

  return (
    <div className=" flex	h-full flex-col justify-between leading-relaxed">
      <h2 className="m-4 text-left sm:hidden">
        Changes are immediately reflected in the "Select Document" Tab.
      </h2>
      <div className="m-4 text-left sm:hidden">
        Printing only available on laptop/desktop.
      </div>
      <article className="m-4 grid-cols-2 gap-4 md:grid ">
        <div>
          <h3 className=" my-1 font-bold">The Applicant</h3>
          <div className="grid grid-cols-2 gap-2">
            <span>Name</span>
            <DataInput prop="applicant" />
            <span>Address</span>
            <DataInput prop="applicantAddress" />
            <span>Affidavit?</span>
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
              checked={applicantAffidavit}
              onChange={(e) => handleAffidavit("applicantAffidavit", e)}
            ></input>
          </div>
        </div>
        <div>
          <h3 className="my-1 font-bold">The Solicitors</h3>
          <div className="grid grid-cols-2 gap-2">
            <span> Name </span>
            <DataInput prop="solicitors" />
            <span>Solicitors' Address </span>
            <DataInput prop="solicitorsAddress" />
            <span>Phone </span> <DataInput prop="solicitorsPhone" />
            <span>Fax </span>
            <DataInput prop="solicitorsFax" />
          </div>
        </div>
        <div className="">
          <h3 className="my-1 font-bold">The ID Deponent</h3>
          <div className="grid grid-cols-2 gap-2">
            <span>Name of Deponent </span> <DataInput prop="idDeponent" />
            Deponent Address <DataInput prop="idDeponentAddress" />
            Affidavit?
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
              checked={idAffidavit}
              onChange={(e) => handleAffidavit("idAffidavit", e)}
            ></input>
          </div>
        </div>
        <div>
          <h3 className="my-1 font-bold">Other information</h3>
          <div className="grid grid-cols-2 gap-2">
            Mover <DataInput prop="mover" />
            Date of Certificate of Qualification for Admission
            <DataInput prop="certdate" />
          </div>
        </div>
      </article>

      <div className="m-4">
        <p className="hidden sm:block">
          {" "}
          Changes are immediately reflected in the "Select Document" Tab.
        </p>
        <p className="hidden sm:block">
          Printing only available on laptop/desktop. (Not available on Firefox
          Android)
        </p>
        <div className="hidden">
          <ComponentToPrint ref={sourceRef} id="source-html" />
        </div>
        <button
          onClick={exportHTML}
          className="my-1 hidden w-40 bg-slate-600 p-1 text-white sm:inline-block "
        >
          Print Word
        </button>
      </div>
    </div>
  );
}
