import PDF from "./components/PDF";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";

function App() {
  return (
    <div>
      <PDFDownloadLink document={<PDF />} fileName="myfirstpdf.pdf">
        {({ loading, url, error, blob }) =>
          loading ? (
            <button>Cargando documento ...</button>
          ) : (
            <button>Descargalo ahora!</button>
          )
        }
      </PDFDownloadLink>

      <PDFViewer>
        <PDF />
      </PDFViewer>
    </div>
  );
}

export default App;
