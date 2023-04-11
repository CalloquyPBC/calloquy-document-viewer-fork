import { newE2EPage } from '@stencil/core/testing';

describe('calloquy-document-viewer', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<calloquy-document-viewer></calloquy-document-viewer>');
    const element = await page.find('calloquy-document-viewer');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<calloquy-document-viewer></calloquy-document-viewer>');
    const component = await page.find('calloquy-document-viewer');
    const element = await page.find('calloquy-document-viewer >>> div');
    expect(element.textContent).toEqual(`Hello, World! I'm `);

    component.setProperty('first', 'James');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James`);

    component.setProperty('last', 'Quincy');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Quincy`);

    component.setProperty('middle', 'Earl');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Earl Quincy`);
  });
});
