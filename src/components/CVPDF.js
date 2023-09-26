import React from 'react'
import "../components/CVPDFStyles.css"
import { Document, Page } from 'react-pdf';
import {pdfjs} from 'react-pdf';

import PDF from "../assets/CV.pdf"

  
const CVPDF = () => {
    
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  return(
    <div>
      <Document file={PDF} >
        <Page pageNumber={1} renderTextLayer={false} renderAnnotationLayer={false}>
        </Page>
      </Document>
    </div>
  )
}


{/* <a
  href="/pdfname.pdf"
  download
>
  Download Resume
</a> */}


export default CVPDF