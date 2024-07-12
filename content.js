function toggleAds() {
    document.getElementById("sadsfs").remove();
}

function observeAds() {
    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            mutation.addedNodes.forEach(node => {
                if (node.nodeType === 1 && node.id === "sadsfs") {
                    toggleAds();
                }
            });
        });
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
}

if (document.readyState === 'complete' || document.readyState === 'interactive') {
    toggleAds();
    observeAds();
} else {
    document.addEventListener('DOMContentLoaded', () => {
        toggleAds();
        observeAds();
    });
}
