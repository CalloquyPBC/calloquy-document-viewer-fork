import { newSpecPage } from '@stencil/core/testing';
import { CalloquyDocumentViewer } from './calloquy-document-viewer.component';

describe('calloquy-document-viewer', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [CalloquyDocumentViewer],
      html: '<calloquy-document-viewer></calloquy-document-viewer>',
    });
    expect(root).toEqualHtml(`
      <calloquy-document-viewer>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </calloquy-document-viewer>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [CalloquyDocumentViewer],
      html: `<calloquy-document-viewer first="Stencil" last="'Don't call me a framework' JS"></calloquy-document-viewer>`,
    });
    expect(root).toEqualHtml(`
      <calloquy-document-viewer first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </calloquy-document-viewer>
    `);
  });
});
