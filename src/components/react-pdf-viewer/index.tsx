/* eslint-disable @typescript-eslint/no-explicit-any */
import { Viewer, Worker } from "@react-pdf-viewer/core";
import {
  ToolbarProps,
  ToolbarSlot,
  defaultLayoutPlugin,
} from "@react-pdf-viewer/default-layout";
import { ReactElement, useState } from "react";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const ReactPdfViewer = () => {
  const [lastPlayed, setLastPlayed] = useState(0);
  const [totalDuration, setTotalDuration] = useState(0);
  const [initialPage] = useState(1);

  const renderToolbar = (Toolbar: (props: ToolbarProps) => ReactElement) => (
    <Toolbar>
      {(slots: ToolbarSlot) => {
        const {
          CurrentPageInput,
          Download,
          EnterFullScreen,
          GoToNextPage,
          GoToPreviousPage,
          NumberOfPages,
          Print,
          ShowSearchPopover,
          Zoom,
          ZoomIn,
          ZoomOut,
        } = slots;
        return (
          <div
            style={{
              alignItems: "center",
              display: "flex",
              width: "100%",
              marginLeft: "50px",
            }}
          >
            <div style={{ padding: "0px 2px" }}>
              <ShowSearchPopover />
            </div>
            <div style={{ padding: "0px 2px" }}>
              <ZoomOut />
            </div>
            <div style={{ padding: "0px 2px" }}>
              <Zoom />
            </div>
            <div style={{ padding: "0px 2px" }}>
              <ZoomIn />
            </div>
            <div style={{ padding: "0px 2px", marginLeft: "auto" }}>
              <GoToPreviousPage />
            </div>
            <div style={{ padding: "0px 2px", width: "4rem" }}>
              <CurrentPageInput />
            </div>
            <div style={{ padding: "0px 2px" }}>
              / <NumberOfPages />
            </div>
            <div style={{ padding: "0px 2px" }}>
              <GoToNextPage />
            </div>
            <div style={{ padding: "0px 2px", marginLeft: "auto" }}>
              <EnterFullScreen />
            </div>
            {/* <div style={{padding: '0px 2px'}}>
                            <Download />
                        </div>
                        <div style={{padding: '0px 2px'}}>
                            <Print />
                        </div> */}
          </div>
        );
      }}
    </Toolbar>
  );

  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    renderToolbar,
    sidebarTabs: (defaultTabs: any) => [],
  });

  const onPageChange = (data: any) => {
    setLastPlayed(data?.currentPage);
  };
  const onDocumentLoad = (data: any) => {
    const totalNumPages: any = data.doc._pdfInfo.numPages || 0;
    setTotalDuration(totalNumPages);
  };

  return (
    <div style={{ height: "100vh" }}>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        {/* <Viewer fileUrl={fileUrl} plugins={[defaultLayoutPluginInstance]} initialPage={} /> */}
        <Viewer
          fileUrl="/src/assets/pdf/sample.pdf"
          plugins={[defaultLayoutPluginInstance]}
          // onPageChange={onPageChange}
          // onDocumentLoad={onDocumentLoad}
          // initialPage={initialPage}
        />
      </Worker>
    </div>
  );
};

export default ReactPdfViewer;
