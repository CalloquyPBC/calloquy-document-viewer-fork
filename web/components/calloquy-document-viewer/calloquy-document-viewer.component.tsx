import { Component, Prop, h, Host } from "@stencil/core";
import { RenderingStates, ScrollMode, SpreadMode } from "../../ui_utils.js";
import { AppOptions } from "../../app_options.js";
import { LinkTarget } from "../../pdf_link_service.js";
import { PDFViewerApplication } from "../../app.js";
import { getPDFViewerConfiguration } from "../utils/pdfview.utils";
import "../../genericcom.js";
import "../../pdf_print_service.js";
import { setAssetsCssVariables } from "../utils/icons.utils";

@Component({
  tag: "calloquy-document-viewer",
  styleUrls: ["calloquy-document-viewer.css"],
  shadow: false,
})
export class CalloquyDocumentViewer {
  /**
   * The file path
   */
  @Prop() file: string;

  componentDidLoad() {
    setAssetsCssVariables();

    const AppConstants = { LinkTarget, RenderingStates, ScrollMode, SpreadMode };

    window["PDFViewerApplication"] = PDFViewerApplication;
    window["PDFViewerApplicationConstants"] = AppConstants;
    window["PDFViewerApplicationOptions"] = AppOptions;


    const config = getPDFViewerConfiguration();
    PDFViewerApplication.run(config, this.file);
  }

  render() {
    return (
      <Host>
        <div id="outerContainer">

          <div id="sidebarContainer">
            <div id="toolbarSidebar">
              <div id="toolbarSidebarLeft">
                <div id="sidebarViewButtons" class="splitToolbarButton toggled" role="radiogroup">
                  <button id="viewThumbnail" class="toolbarButton toggled" title="Show Thumbnails"
                          tabIndex={2}
                          data-l10n-id="thumbs" role="radio" aria-checked="true"
                          aria-controls="thumbnailView">
                    <span data-l10n-id="thumbs_label">Thumbnails</span>
                  </button>
                  <button id="viewOutline" class="toolbarButton"
                          title="Show Document Outline (double-click to expand/collapse all items)"
                          tabIndex={3}
                          data-l10n-id="document_outline" role="radio" aria-checked="false"
                          aria-controls="outlineView">
                    <span data-l10n-id="document_outline_label">Document Outline</span>
                  </button>
                  <button id="viewAttachments" class="toolbarButton" title="Show Attachments"
                          tabIndex={4}
                          data-l10n-id="attachments" role="radio" aria-checked="false"
                          aria-controls="attachmentsView">
                    <span data-l10n-id="attachments_label">Attachments</span>
                  </button>
                  <button id="viewLayers" class="toolbarButton"
                          title="Show Layers (double-click to reset all layers to the default state)"
                          tabIndex={5}
                          data-l10n-id="layers" role="radio" aria-checked="false"
                          aria-controls="layersView">
                    <span data-l10n-id="layers_label">Layers</span>
                  </button>
                </div>
              </div>

              <div id="toolbarSidebarRight">
                <div id="outlineOptionsContainer" class="hidden">
                  <div class="verticalToolbarSeparator"></div>

                  <button id="currentOutlineItem" class="toolbarButton" disabled
                          title="Find Current Outline Item" tabIndex={6}
                          data-l10n-id="current_outline_item">
                    <span data-l10n-id="current_outline_item_label">Current Outline Item</span>
                  </button>
                </div>
              </div>
            </div>
            <div id="sidebarContent">
              <div id="thumbnailView">
              </div>
              <div id="outlineView" class="hidden">
              </div>
              <div id="attachmentsView" class="hidden">
              </div>
              <div id="layersView" class="hidden">
              </div>
            </div>
            <div id="sidebarResizer"></div>
          </div>

          <div id="mainContainer">
            <div class="findbar hidden doorHanger" id="findbar">
              <div id="findbarInputContainer">
                <input id="findInput" class="toolbarField" title="Find" placeholder="Find in document…"
                       tabIndex={91} data-l10n-id="find_input" aria-invalid="false" />
                <div class="splitToolbarButton">
                  <button id="findPrevious" class="toolbarButton"
                          title="Find the previous occurrence of the phrase" tabIndex={92}
                          data-l10n-id="find_previous">
                    <span data-l10n-id="find_previous_label">Previous</span>
                  </button>
                  <div class="splitToolbarButtonSeparator"></div>
                  <button id="findNext" class="toolbarButton"
                          title="Find the next occurrence of the phrase"
                          tabIndex={93} data-l10n-id="find_next">
                    <span data-l10n-id="find_next_label">Next</span>
                  </button>
                </div>
              </div>

              <div id="findbarOptionsOneContainer">
                <input type="checkbox" id="findHighlightAll" class="toolbarField" tabIndex={94} />
                <label htmlFor="findHighlightAll" class="toolbarLabel" data-l10n-id="find_highlight">Highlight
                  All</label>
                <input type="checkbox" id="findMatchCase" class="toolbarField" tabIndex={95} />
                <label htmlFor="findMatchCase" class="toolbarLabel"
                       data-l10n-id="find_match_case_label">Match
                  Case</label>
              </div>
              <div id="findbarOptionsTwoContainer">
                <input type="checkbox" id="findMatchDiacritics" class="toolbarField" tabIndex={96} />
                <label htmlFor="findMatchDiacritics" class="toolbarLabel"
                       data-l10n-id="find_match_diacritics_label">Match Diacritics</label>
                <input type="checkbox" id="findEntireWord" class="toolbarField" tabIndex={97} />
                <label htmlFor="findEntireWord" class="toolbarLabel"
                       data-l10n-id="find_entire_word_label">Whole
                  Words</label>
              </div>

              <div id="findbarMessageContainer" aria-live="polite">
                <span id="findResultsCount" class="toolbarLabel"></span>
                <span id="findMsg" class="toolbarLabel"></span>
              </div>
            </div>

            <div class="editorParamsToolbar hidden doorHangerRight" id="editorFreeTextParamsToolbar">
              <div class="editorParamsToolbarContainer">
                <div class="editorParamsSetter">
                  <label htmlFor="editorFreeTextColor" class="editorParamsLabel"
                         data-l10n-id="editor_free_text_color">Color</label>
                  <input type="color" id="editorFreeTextColor" class="editorParamsColor"
                         tabIndex={100} />
                </div>
                <div class="editorParamsSetter">
                  <label htmlFor="editorFreeTextFontSize" class="editorParamsLabel"
                         data-l10n-id="editor_free_text_size">Size</label>
                  <input type="range" id="editorFreeTextFontSize" class="editorParamsSlider"
                         value="10" min="5"
                         max="100" step="1" tabIndex={101} />
                </div>
              </div>
            </div>

            <div class="editorParamsToolbar hidden doorHangerRight" id="editorInkParamsToolbar">
              <div class="editorParamsToolbarContainer">
                <div class="editorParamsSetter">
                  <label htmlFor="editorInkColor" class="editorParamsLabel"
                         data-l10n-id="editor_ink_color">Color</label>
                  <input type="color" id="editorInkColor" class="editorParamsColor" tabIndex={102} />
                </div>
                <div class="editorParamsSetter">
                  <label htmlFor="editorInkThickness" class="editorParamsLabel"
                         data-l10n-id="editor_ink_thickness">Thickness</label>
                  <input type="range" id="editorInkThickness" class="editorParamsSlider" value="1"
                         min="1" max="20"
                         step="1" tabIndex={103} />
                </div>
                <div class="editorParamsSetter">
                  <label htmlFor="editorInkOpacity" class="editorParamsLabel"
                         data-l10n-id="editor_ink_opacity">Opacity</label>
                  <input type="range" id="editorInkOpacity" class="editorParamsSlider" value="100"
                         min="1" max="100"
                         step="1" tabIndex={104} />
                </div>
              </div>
            </div>

            <div id="secondaryToolbar" class="secondaryToolbar hidden doorHangerRight">
              <div id="secondaryToolbarButtonContainer">
                <button id="secondaryOpenFile" class="secondaryToolbarButton visibleLargeView"
                        title="Open File"
                        tabIndex={51} data-l10n-id="open_file">
                  <span data-l10n-id="open_file_label">Open</span>
                </button>

                <button id="secondaryPrint" class="secondaryToolbarButton visibleMediumView"
                        title="Print"
                        tabIndex={52} data-l10n-id="print">
                  <span data-l10n-id="print_label">Print</span>
                </button>

                <button id="secondaryDownload" class="secondaryToolbarButton visibleMediumView"
                        title="Save"
                        tabIndex={53} data-l10n-id="save">
                  <span data-l10n-id="save_label">Save</span>
                </button>

                <div class="horizontalToolbarSeparator visibleLargeView"></div>

                <button id="presentationMode" class="secondaryToolbarButton"
                        title="Switch to Presentation Mode"
                        tabIndex={54} data-l10n-id="presentation_mode">
                  <span data-l10n-id="presentation_mode_label">Presentation Mode</span>
                </button>

                <a href="#" id="viewBookmark" class="secondaryToolbarButton"
                   title="Current Page (View URL from Current Page)" tabIndex={55}
                   data-l10n-id="bookmark1">
                  <span data-l10n-id="bookmark1_label">Current Page</span>
                </a>

                <div id="viewBookmarkSeparator" class="horizontalToolbarSeparator"></div>

                <button id="firstPage" class="secondaryToolbarButton" title="Go to First Page"
                        tabIndex={56}
                        data-l10n-id="first_page">
                  <span data-l10n-id="first_page_label">Go to First Page</span>
                </button>
                <button id="lastPage" class="secondaryToolbarButton" title="Go to Last Page"
                        tabIndex={57}
                        data-l10n-id="last_page">
                  <span data-l10n-id="last_page_label">Go to Last Page</span>
                </button>

                <div class="horizontalToolbarSeparator"></div>

                <button id="pageRotateCw" class="secondaryToolbarButton" title="Rotate Clockwise"
                        tabIndex={58}
                        data-l10n-id="page_rotate_cw">
                  <span data-l10n-id="page_rotate_cw_label">Rotate Clockwise</span>
                </button>
                <button id="pageRotateCcw" class="secondaryToolbarButton"
                        title="Rotate Counterclockwise"
                        tabIndex={59} data-l10n-id="page_rotate_ccw">
                  <span data-l10n-id="page_rotate_ccw_label">Rotate Counterclockwise</span>
                </button>

                <div class="horizontalToolbarSeparator"></div>

                <div id="cursorToolButtons" role="radiogroup">
                  <button id="cursorSelectTool" class="secondaryToolbarButton toggled"
                          title="Enable Text Selection Tool" tabIndex={60}
                          data-l10n-id="cursor_text_select_tool"
                          role="radio" aria-checked="true">
                    <span data-l10n-id="cursor_text_select_tool_label">Text Selection Tool</span>
                  </button>
                  <button id="cursorHandTool" class="secondaryToolbarButton" title="Enable Hand Tool"
                          tabIndex={61}
                          data-l10n-id="cursor_hand_tool" role="radio" aria-checked="false">
                    <span data-l10n-id="cursor_hand_tool_label">Hand Tool</span>
                  </button>
                </div>

                <div class="horizontalToolbarSeparator"></div>

                <div id="scrollModeButtons" role="radiogroup">
                  <button id="scrollPage" class="secondaryToolbarButton" title="Use Page Scrolling"
                          tabIndex={62}
                          data-l10n-id="scroll_page" role="radio" aria-checked="false">
                    <span data-l10n-id="scroll_page_label">Page Scrolling</span>
                  </button>
                  <button id="scrollVertical" class="secondaryToolbarButton toggled"
                          title="Use Vertical Scrolling"
                          tabIndex={63} data-l10n-id="scroll_vertical" role="radio"
                          aria-checked="true">
                    <span data-l10n-id="scroll_vertical_label">Vertical Scrolling</span>
                  </button>
                  <button id="scrollHorizontal" class="secondaryToolbarButton"
                          title="Use Horizontal Scrolling"
                          tabIndex={64} data-l10n-id="scroll_horizontal" role="radio"
                          aria-checked="false">
                    <span data-l10n-id="scroll_horizontal_label">Horizontal Scrolling</span>
                  </button>
                  <button id="scrollWrapped" class="secondaryToolbarButton"
                          title="Use Wrapped Scrolling"
                          tabIndex={65} data-l10n-id="scroll_wrapped" role="radio"
                          aria-checked="false">
                    <span data-l10n-id="scroll_wrapped_label">Wrapped Scrolling</span>
                  </button>
                </div>

                <div class="horizontalToolbarSeparator"></div>

                <div id="spreadModeButtons" role="radiogroup">
                  <button id="spreadNone" class="secondaryToolbarButton toggled"
                          title="Do not join page spreads"
                          tabIndex={66} data-l10n-id="spread_none" role="radio" aria-checked="true">
                    <span data-l10n-id="spread_none_label">No Spreads</span>
                  </button>
                  <button id="spreadOdd" class="secondaryToolbarButton"
                          title="Join page spreads starting with odd-numbered pages" tabIndex={67}
                          data-l10n-id="spread_odd" role="radio" aria-checked="false">
                    <span data-l10n-id="spread_odd_label">Odd Spreads</span>
                  </button>
                  <button id="spreadEven" class="secondaryToolbarButton"
                          title="Join page spreads starting with even-numbered pages" tabIndex={68}
                          data-l10n-id="spread_even" role="radio" aria-checked="false">
                    <span data-l10n-id="spread_even_label">Even Spreads</span>
                  </button>
                </div>

                <div class="horizontalToolbarSeparator"></div>

                <button id="documentProperties" class="secondaryToolbarButton"
                        title="Document Properties…"
                        tabIndex={69} data-l10n-id="document_properties"
                        aria-controls="documentPropertiesDialog">
                  <span data-l10n-id="document_properties_label">Document Properties…</span>
                </button>
              </div>
            </div>

            <div class="toolbar">
              <div id="toolbarContainer">
                <div id="toolbarViewer">
                  <div id="toolbarViewerLeft">
                    <button id="sidebarToggle" class="toolbarButton" title="Toggle Sidebar"
                            tabIndex={11}
                            data-l10n-id="toggle_sidebar" aria-expanded="false"
                            aria-controls="sidebarContainer">
                      <span data-l10n-id="toggle_sidebar_label">Toggle Sidebar</span>
                    </button>
                    <div class="toolbarButtonSpacer"></div>
                    <button id="viewFind" class="toolbarButton" title="Find in Document"
                            tabIndex={12}
                            data-l10n-id="findbar" aria-expanded="false" aria-controls="findbar">
                      <span data-l10n-id="findbar_label">Find</span>
                    </button>
                    <div class="splitToolbarButton hiddenSmallView">
                      <button class="toolbarButton" title="Previous Page" id="previous"
                              tabIndex={13}
                              data-l10n-id="previous">
                        <span data-l10n-id="previous_label">Previous</span>
                      </button>
                      <div class="splitToolbarButtonSeparator"></div>
                      <button class="toolbarButton" title="Next Page" id="next" tabIndex={14}
                              data-l10n-id="next">
                        <span data-l10n-id="next_label">Next</span>
                      </button>
                    </div>
                    <input type="number" id="pageNumber" class="toolbarField" title="Page" value="1"
                           min="1"
                           tabIndex={15} data-l10n-id="page" autoComplete="off" />
                    <span id="numPages" class="toolbarLabel"></span>
                  </div>
                  <div id="toolbarViewerRight">
                    <button id="openFile" class="toolbarButton hiddenLargeView" title="Open File"
                            tabIndex={31}
                            data-l10n-id="open_file">
                      <span data-l10n-id="open_file_label">Open</span>
                    </button>

                    <button id="print" class="toolbarButton hiddenMediumView" title="Print"
                            tabIndex={32}
                            data-l10n-id="print">
                      <span data-l10n-id="print_label">Print</span>
                    </button>

                    <button id="download" class="toolbarButton hiddenMediumView" title="Save"
                            tabIndex={33}
                            data-l10n-id="save">
                      <span data-l10n-id="save_label">Save</span>
                    </button>

                    <div class="verticalToolbarSeparator hiddenMediumView"></div>

                    <div id="editorModeButtons" class="splitToolbarButton toggled"
                         role="radiogroup">
                      <button id="editorFreeText" class="toolbarButton" disabled title="Text"
                              role="radio" aria-checked="false" tabIndex={34}
                              data-l10n-id="editor_free_text2">
                        <span data-l10n-id="editor_free_text2_label">Text</span>
                      </button>
                      <button id="editorInk" class="toolbarButton" disabled title="Draw"
                              role="radio"
                              aria-checked="false" tabIndex={35} data-l10n-id="editor_ink2">
                        <span data-l10n-id="editor_ink2_label">Draw</span>
                      </button>
                    </div>

                    <div id="editorModeSeparator" class="verticalToolbarSeparator"></div>

                    <button id="secondaryToolbarToggle" class="toolbarButton" title="Tools"
                            tabIndex={48}
                            data-l10n-id="tools" aria-expanded="false"
                            aria-controls="secondaryToolbar">
                      <span data-l10n-id="tools_label">Tools</span>
                    </button>
                  </div>
                  <div id="toolbarViewerMiddle">
                    <div class="splitToolbarButton">
                      <button id="zoomOut" class="toolbarButton" title="Zoom Out" tabIndex={21}
                              data-l10n-id="zoom_out">
                        <span data-l10n-id="zoom_out_label">Zoom Out</span>
                      </button>
                      <div class="splitToolbarButtonSeparator"></div>
                      <button id="zoomIn" class="toolbarButton" title="Zoom In" tabIndex={22}
                              data-l10n-id="zoom_in">
                        <span data-l10n-id="zoom_in_label">Zoom In</span>
                      </button>
                    </div>
                    <span id="scaleSelectContainer" class="dropdownToolbarButton">
                  <select id="scaleSelect" title="Zoom" tabIndex={23} data-l10n-id="zoom">
                    <option id="pageAutoOption" title="" value="auto" selected
                            data-l10n-id="page_scale_auto">Automatic Zoom</option>
                    <option id="pageActualOption" title="" value="page-actual" data-l10n-id="page_scale_actual">Actual Size</option>
                    <option id="pageFitOption" title="" value="page-fit" data-l10n-id="page_scale_fit">Page Fit</option>
                    <option id="pageWidthOption" title="" value="page-width"
                            data-l10n-id="page_scale_width">Page Width</option>
                    <option id="customScaleOption" title="" value="custom" disabled hidden></option>
                    <option title="" value="0.5" data-l10n-id="page_scale_percent"
                            data-l10n-args='{ "scale": 50 }'>50%</option>
                    <option title="" value="0.75" data-l10n-id="page_scale_percent"
                            data-l10n-args='{ "scale": 75 }'>75%</option>
                    <option title="" value="1" data-l10n-id="page_scale_percent"
                            data-l10n-args='{ "scale": 100 }'>100%</option>
                    <option title="" value="1.25" data-l10n-id="page_scale_percent"
                            data-l10n-args='{ "scale": 125 }'>125%</option>
                    <option title="" value="1.5" data-l10n-id="page_scale_percent"
                            data-l10n-args='{ "scale": 150 }'>150%</option>
                    <option title="" value="2" data-l10n-id="page_scale_percent"
                            data-l10n-args='{ "scale": 200 }'>200%</option>
                    <option title="" value="3" data-l10n-id="page_scale_percent"
                            data-l10n-args='{ "scale": 300 }'>300%</option>
                    <option title="" value="4" data-l10n-id="page_scale_percent"
                            data-l10n-args='{ "scale": 400 }'>400%</option>
                  </select>
                </span>
                  </div>
                </div>
                <div id="loadingBar">
                  <div class="progress">
                    <div class="glimmer">
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="viewerContainer" tabIndex={0}>
              <div id="viewer" class="pdfViewer"></div>
            </div>
          </div>

          <div id="dialogContainer">
            <dialog id="passwordDialog">
              <div class="row">
                <label htmlFor="password" id="passwordText" data-l10n-id="password_label">Enter the
                  password to open
                  this PDF file:</label>
              </div>
              <div class="row">
                <input type="password" id="password" class="toolbarField" />
              </div>
              <div class="buttonRow">
                <button id="passwordCancel" class="dialogButton"><span
                  data-l10n-id="password_cancel">Cancel</span>
                </button>
                <button id="passwordSubmit" class="dialogButton"><span
                  data-l10n-id="password_ok">OK</span></button>
              </div>
            </dialog>
            <dialog id="documentPropertiesDialog">
              <div class="row">
                <span id="fileNameLabel" data-l10n-id="document_properties_file_name">File name:</span>
                <p id="fileNameField" aria-labelledby="fileNameLabel">-</p>
              </div>
              <div class="row">
                <span id="fileSizeLabel" data-l10n-id="document_properties_file_size">File size:</span>
                <p id="fileSizeField" aria-labelledby="fileSizeLabel">-</p>
              </div>
              <div class="separator"></div>
              <div class="row">
                <span id="titleLabel" data-l10n-id="document_properties_title">Title:</span>
                <p id="titleField" aria-labelledby="titleLabel">-</p>
              </div>
              <div class="row">
                <span id="authorLabel" data-l10n-id="document_properties_author">Author:</span>
                <p id="authorField" aria-labelledby="authorLabel">-</p>
              </div>
              <div class="row">
                <span id="subjectLabel" data-l10n-id="document_properties_subject">Subject:</span>
                <p id="subjectField" aria-labelledby="subjectLabel">-</p>
              </div>
              <div class="row">
                <span id="keywordsLabel" data-l10n-id="document_properties_keywords">Keywords:</span>
                <p id="keywordsField" aria-labelledby="keywordsLabel">-</p>
              </div>
              <div class="row">
                <span id="creationDateLabel" data-l10n-id="document_properties_creation_date">Creation Date:</span>
                <p id="creationDateField" aria-labelledby="creationDateLabel">-</p>
              </div>
              <div class="row">
                <span id="modificationDateLabel"
                      data-l10n-id="document_properties_modification_date">Modification Date:</span>
                <p id="modificationDateField" aria-labelledby="modificationDateLabel">-</p>
              </div>
              <div class="row">
                <span id="creatorLabel" data-l10n-id="document_properties_creator">Creator:</span>
                <p id="creatorField" aria-labelledby="creatorLabel">-</p>
              </div>
              <div class="separator"></div>
              <div class="row">
                                <span id="producerLabel"
                                      data-l10n-id="document_properties_producer">PDF Producer:</span>
                <p id="producerField" aria-labelledby="producerLabel">-</p>
              </div>
              <div class="row">
                <span id="versionLabel" data-l10n-id="document_properties_version">PDF Version:</span>
                <p id="versionField" aria-labelledby="versionLabel">-</p>
              </div>
              <div class="row">
                                <span id="pageCountLabel"
                                      data-l10n-id="document_properties_page_count">Page Count:</span>
                <p id="pageCountField" aria-labelledby="pageCountLabel">-</p>
              </div>
              <div class="row">
                <span id="pageSizeLabel" data-l10n-id="document_properties_page_size">Page Size:</span>
                <p id="pageSizeField" aria-labelledby="pageSizeLabel">-</p>
              </div>
              <div class="separator"></div>
              <div class="row">
                                <span id="linearizedLabel"
                                      data-l10n-id="document_properties_linearized">Fast Web View:</span>
                <p id="linearizedField" aria-labelledby="linearizedLabel">-</p>
              </div>
              <div class="buttonRow">
                <button id="documentPropertiesClose" class="dialogButton"><span
                  data-l10n-id="document_properties_close">Close</span></button>
              </div>
            </dialog>
            <dialog id="printServiceDialog" style={{ minWidth: "200px" }}>
              <div class="row">
                <span data-l10n-id="print_progress_message">Preparing document for printing…</span>
              </div>
              <div class="row">
                <progress value="0" max="100"></progress>
                <span data-l10n-id="print_progress_percent" data-l10n-args='{ "progress": 0 }'
                      class="relative-progress">0%</span>
              </div>
              <div class="buttonRow">
                <button id="printCancel" class="dialogButton"><span
                  data-l10n-id="print_progress_close">Cancel</span></button>
              </div>
            </dialog>
          </div>

        </div>

        <div id="printContainer"></div>
        <input type="file" id="fileInput" class="hidden" />
      </Host>
    );
  }
}