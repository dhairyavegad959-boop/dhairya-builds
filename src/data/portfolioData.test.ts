import test from 'node:test';
import assert from 'node:assert/strict';
import {
  BRAND_CONFIG,
  PORTFOLIO_PROJECTS,
  PROJECT_CATEGORIES,
  SERVICES,
  NOTION_TEMPLATES,
  filterProjectsByCategory,
  buildMailtoHref,
  validateServiceCompliance,
} from './portfolioData';

test('services strictly match the 4 allowed core services with zero prohibited services', () => {
  const compliance = validateServiceCompliance(SERVICES);
  assert.equal(compliance.valid, true);
  assert.equal(compliance.count, 4);
  assert.deepEqual(compliance.prohibitedFound, []);

  const titles = SERVICES.map((s) => s.title);
  assert.deepEqual(titles, [
    'AI Cinematic Videos',
    'AI Marketing Posters',
    'YouTube Thumbnails',
    'Customizable Notion Templates',
  ]);
});

test('portfolio projects contain no prohibited services or fabricated metrics', () => {
  const serializedProjects = JSON.stringify(PORTFOLIO_PROJECTS).toLowerCase();
  assert.equal(serializedProjects.includes('nova planner'), false);
  assert.equal(serializedProjects.includes('qr menu'), false);
  assert.equal(serializedProjects.includes('qr ordering'), false);
  assert.equal(serializedProjects.includes('3.2x'), false);
});

test('filterProjectsByCategory returns all projects for All and filters accurately per category', () => {
  const all = filterProjectsByCategory(PORTFOLIO_PROJECTS, 'All');
  assert.equal(all.length, PORTFOLIO_PROJECTS.length);

  for (const category of PROJECT_CATEGORIES) {
    if (category === 'All') continue;
    const filtered = filterProjectsByCategory(PORTFOLIO_PROJECTS, category);
    assert.ok(filtered.length > 0, `Expected at least one entry for category ${category}`);
    assert.ok(filtered.every((p) => p.category === category));
  }
});

test('buildMailtoHref constructs valid mailto links with preserved email address', () => {
  const href = buildMailtoHref(BRAND_CONFIG.email, BRAND_CONFIG.defaultEmailSubject);
  assert.equal(
    href,
    'mailto:dhairyavegad172@gmail.com?subject=Project%20Inquiry%20%E2%80%94%20Dhairya%20Builds'
  );

  const plainHref = buildMailtoHref(BRAND_CONFIG.email);
  assert.equal(plainHref, 'mailto:dhairyavegad172@gmail.com');
});

test('brand config preserves authentic email and Instagram profile URL', () => {
  assert.equal(BRAND_CONFIG.email, 'dhairyavegad172@gmail.com');
  assert.ok(BRAND_CONFIG.instagramUrl.startsWith('https://www.instagram.com/dhairyabuilds'));
  assert.ok(NOTION_TEMPLATES.some((t) => t.type === 'Ready-Made Template'));
  assert.ok(NOTION_TEMPLATES.some((t) => t.type === 'Custom Workspace'));
});
