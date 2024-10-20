export async function load() {
    const portfolioText = await import('../../content/portfolio/_index.md');

    return {
        content: portfolioText.default
    }
}