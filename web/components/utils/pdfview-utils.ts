import { getAssetPath } from "@stencil/core";

export function getPDFViewerConfiguration() {
  return {
    appContainer: document.querySelector("calloquy-document-viewer"),
    mainContainer: document.getElementById("viewerContainer"),
    viewerContainer: document.getElementById("viewer"),
    toolbar: {
      container: document.getElementById("toolbarViewer"),
      numPages: document.getElementById("numPages"),
      pageNumber: document.getElementById("pageNumber"),
      scaleSelect: document.getElementById("scaleSelect"),
      customScaleOption: document.getElementById("customScaleOption"),
      previous: document.getElementById("previous"),
      next: document.getElementById("next"),
      zoomIn: document.getElementById("zoomIn"),
      zoomOut: document.getElementById("zoomOut"),
      viewFind: document.getElementById("viewFind"),
      openFile: document.getElementById("openFile"),
      print: document.getElementById("print"),
      editorFreeTextButton: document.getElementById("editorFreeText"),
      editorFreeTextParamsToolbar: document.getElementById(
        "editorFreeTextParamsToolbar"
      ),
      editorInkButton: document.getElementById("editorInk"),
      editorInkParamsToolbar: document.getElementById("editorInkParamsToolbar"),
      download: document.getElementById("download")
    },
    secondaryToolbar: {
      toolbar: document.getElementById("secondaryToolbar"),
      toggleButton: document.getElementById("secondaryToolbarToggle"),
      presentationModeButton: document.getElementById("presentationMode"),
      openFileButton: document.getElementById("secondaryOpenFile"),
      printButton: document.getElementById("secondaryPrint"),
      downloadButton: document.getElementById("secondaryDownload"),
      viewBookmarkButton: document.getElementById("viewBookmark"),
      firstPageButton: document.getElementById("firstPage"),
      lastPageButton: document.getElementById("lastPage"),
      pageRotateCwButton: document.getElementById("pageRotateCw"),
      pageRotateCcwButton: document.getElementById("pageRotateCcw"),
      cursorSelectToolButton: document.getElementById("cursorSelectTool"),
      cursorHandToolButton: document.getElementById("cursorHandTool"),
      scrollPageButton: document.getElementById("scrollPage"),
      scrollVerticalButton: document.getElementById("scrollVertical"),
      scrollHorizontalButton: document.getElementById("scrollHorizontal"),
      scrollWrappedButton: document.getElementById("scrollWrapped"),
      spreadNoneButton: document.getElementById("spreadNone"),
      spreadOddButton: document.getElementById("spreadOdd"),
      spreadEvenButton: document.getElementById("spreadEven"),
      documentPropertiesButton: document.getElementById("documentProperties")
    },
    sidebar: {
      // Divs (and sidebar button)
      outerContainer: document.getElementById("outerContainer"),
      sidebarContainer: document.getElementById("sidebarContainer"),
      toggleButton: document.getElementById("sidebarToggle"),
      // Buttons
      thumbnailButton: document.getElementById("viewThumbnail"),
      outlineButton: document.getElementById("viewOutline"),
      attachmentsButton: document.getElementById("viewAttachments"),
      layersButton: document.getElementById("viewLayers"),
      // Views
      thumbnailView: document.getElementById("thumbnailView"),
      outlineView: document.getElementById("outlineView"),
      attachmentsView: document.getElementById("attachmentsView"),
      layersView: document.getElementById("layersView"),
      // View-specific options
      outlineOptionsContainer: document.getElementById(
        "outlineOptionsContainer"
      ),
      currentOutlineItemButton: document.getElementById("currentOutlineItem")
    },
    sidebarResizer: {
      outerContainer: document.getElementById("outerContainer"),
      resizer: document.getElementById("sidebarResizer")
    },
    findBar: {
      bar: document.getElementById("findbar"),
      toggleButton: document.getElementById("viewFind"),
      findField: document.getElementById("findInput"),
      highlightAllCheckbox: document.getElementById("findHighlightAll"),
      caseSensitiveCheckbox: document.getElementById("findMatchCase"),
      matchDiacriticsCheckbox: document.getElementById("findMatchDiacritics"),
      entireWordCheckbox: document.getElementById("findEntireWord"),
      findMsg: document.getElementById("findMsg"),
      findResultsCount: document.getElementById("findResultsCount"),
      findPreviousButton: document.getElementById("findPrevious"),
      findNextButton: document.getElementById("findNext")
    },
    passwordOverlay: {
      dialog: document.getElementById("passwordDialog"),
      label: document.getElementById("passwordText"),
      input: document.getElementById("password"),
      submitButton: document.getElementById("passwordSubmit"),
      cancelButton: document.getElementById("passwordCancel")
    },
    documentProperties: {
      dialog: document.getElementById("documentPropertiesDialog"),
      closeButton: document.getElementById("documentPropertiesClose"),
      fields: {
        fileName: document.getElementById("fileNameField"),
        fileSize: document.getElementById("fileSizeField"),
        title: document.getElementById("titleField"),
        author: document.getElementById("authorField"),
        subject: document.getElementById("subjectField"),
        keywords: document.getElementById("keywordsField"),
        creationDate: document.getElementById("creationDateField"),
        modificationDate: document.getElementById("modificationDateField"),
        creator: document.getElementById("creatorField"),
        producer: document.getElementById("producerField"),
        version: document.getElementById("versionField"),
        pageCount: document.getElementById("pageCountField"),
        pageSize: document.getElementById("pageSizeField"),
        linearized: document.getElementById("linearizedField")
      }
    },
    annotationEditorParams: {
      editorFreeTextFontSize: document.getElementById("editorFreeTextFontSize"),
      editorFreeTextColor: document.getElementById("editorFreeTextColor"),
      editorInkColor: document.getElementById("editorInkColor"),
      editorInkThickness: document.getElementById("editorInkThickness"),
      editorInkOpacity: document.getElementById("editorInkOpacity")
    },
    printContainer: document.getElementById("printContainer"),
    openFileInput: document.getElementById("fileInput"),
    debuggerScriptPath: "./debugger.js"
  };
}

function setCssAssetVariable(root: HTMLElement, name: string, path) {
  const fullPath = getAssetPath(path);
  root.style.setProperty(name, `url('${fullPath}')`);
}

export function setAssetsCssVariables() {
  const root = document.querySelector<HTMLElement>(':root');
  // PDFViewerApplication.run({});
  setCssAssetVariable(root, "--loading-icon", "assets/loading.svg");
  setCssAssetVariable(root, "--treeitem-expanded-icon", "assets/treeitem-expanded.svg");
  setCssAssetVariable(root, "--treeitem-collapsed-icon", "assets/treeitem-collapsed.svg");
  setCssAssetVariable(root, "--toolbarButton-editorFreeText-icon", "assets/toolbarButton-editorFreeText.svg");
  setCssAssetVariable(root, "--toolbarButton-editorInk-icon", "assets/toolbarButton-editorInk.svg");
  setCssAssetVariable(root, "--toolbarButton-menuArrow-icon", "assets/toolbarButton-menuArrow.svg");
  setCssAssetVariable(root, "--toolbarButton-sidebarToggle-icon", "assets/toolbarButton-sidebarToggle.svg");
  setCssAssetVariable(root, "--toolbarButton-secondaryToolbarToggle-icon", "assets/toolbarButton-secondaryToolbarToggle.svg");
  setCssAssetVariable(root, "--toolbarButton-pageUp-icon", "assets/toolbarButton-pageUp.svg");
  setCssAssetVariable(root, "--toolbarButton-pageDown-icon", "assets/toolbarButton-pageDown.svg");
  setCssAssetVariable(root, "--toolbarButton-zoomOut-icon", "assets/toolbarButton-zoomOut.svg");
  setCssAssetVariable(root, "--toolbarButton-zoomIn-icon", "assets/toolbarButton-zoomIn.svg");
  setCssAssetVariable(root, "--toolbarButton-presentationMode-icon", "assets/toolbarButton-presentationMode.svg");
  setCssAssetVariable(root, "--toolbarButton-print-icon", "assets/toolbarButton-print.svg");
  setCssAssetVariable(root, "--toolbarButton-openFile-icon", "assets/toolbarButton-openFile.svg");
  setCssAssetVariable(root, "--toolbarButton-download-icon", "assets/toolbarButton-download.svg");
  setCssAssetVariable(root, "--toolbarButton-bookmark-icon", "assets/toolbarButton-bookmark.svg");
  setCssAssetVariable(root, "--toolbarButton-viewThumbnail-icon", "assets/toolbarButton-viewThumbnail.svg");
  setCssAssetVariable(root, "--toolbarButton-viewOutline-icon", "assets/toolbarButton-viewOutline.svg");
  setCssAssetVariable(root, "--toolbarButton-viewAttachments-icon", "assets/toolbarButton-viewAttachments.svg");
  setCssAssetVariable(root, "--toolbarButton-viewLayers-icon", "assets/toolbarButton-viewLayers.svg");
  setCssAssetVariable(root, "--toolbarButton-currentOutlineItem-icon", "assets/toolbarButton-currentOutlineItem.svg");
  setCssAssetVariable(root, "--toolbarButton-search-icon", "assets/toolbarButton-search.svg");
  setCssAssetVariable(root, "--findbarButton-previous-icon", "assets/findbarButton-previous.svg");
  setCssAssetVariable(root, "--findbarButton-next-icon", "assets/findbarButton-next.svg");
  setCssAssetVariable(root, "--secondaryToolbarButton-firstPage-icon", "assets/secondaryToolbarButton-firstPage.svg");
  setCssAssetVariable(root, "--secondaryToolbarButton-lastPage-icon", "assets/secondaryToolbarButton-lastPage.svg");
  setCssAssetVariable(root, "--secondaryToolbarButton-rotateCcw-icon", "assets/secondaryToolbarButton-rotateCcw.svg");
  setCssAssetVariable(root, "--secondaryToolbarButton-rotateCw-icon", "assets/secondaryToolbarButton-rotateCw.svg");
  setCssAssetVariable(root, "--secondaryToolbarButton-selectTool-icon", "assets/secondaryToolbarButton-selectTool.svg");
  setCssAssetVariable(root, "--secondaryToolbarButton-handTool-icon", "assets/secondaryToolbarButton-handTool.svg");
  setCssAssetVariable(root, "--secondaryToolbarButton-scrollPage-icon", "assets/secondaryToolbarButton-scrollPage.svg");
  setCssAssetVariable(root, "--secondaryToolbarButton-scrollVertical-icon", "assets/secondaryToolbarButton-scrollVertical.svg");
  setCssAssetVariable(root, "--secondaryToolbarButton-scrollHorizontal-icon", "assets/secondaryToolbarButton-scrollHorizontal.svg");
  setCssAssetVariable(root, "--secondaryToolbarButton-scrollWrapped-icon", "assets/secondaryToolbarButton-scrollWrapped.svg");
  setCssAssetVariable(root, "--secondaryToolbarButton-spreadNone-icon", "assets/secondaryToolbarButton-spreadNone.svg");
  setCssAssetVariable(root, "--secondaryToolbarButton-spreadOdd-icon", "assets/secondaryToolbarButton-spreadOdd.svg");
  setCssAssetVariable(root, "--secondaryToolbarButton-spreadEven-icon", "assets/secondaryToolbarButton-spreadEven.svg");
  setCssAssetVariable(root, "--secondaryToolbarButton-documentProperties-icon", "assets/secondaryToolbarButton-documentProperties.svg");
}