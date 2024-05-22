window.addEventListener('load', () => {
    console.log('DOM fully loaded');

    let widthChanged = false;

    // Function to change the width of the target div
    const changeWidth = () => {
        const targetDiv = document.querySelector('.flex-shrink-0.overflow-x-hidden.bg-token-sidebar-surface-primary') as HTMLElement;
        const secondTargetDiv = document.querySelector('.h-full.w-\\[260px\\]') as HTMLElement;

        if (targetDiv && !widthChanged) {
            // Log the current inline styles for debugging
            console.log('Before removing width:', targetDiv.style.cssText);

            // Remove the inline width property
            targetDiv.style.width = '500px';

            secondTargetDiv.style.width = '500px';

            // Log the updated inline styles for debugging
            console.log('After removing width:', targetDiv.style.cssText);

            widthChanged = true; // Set flag to true to prevent further changes
        } else {
            console.log('Target div not found or already changed');
        }

      



    };

    // Function to enforce the width removal persistently
    const enforceWidthChange = () => {
        const targetDiv = document.querySelector('.flex-shrink-0.overflow-x-hidden.bg-token-sidebar-surface-primary') as HTMLElement;
        const secondTargetDiv = document.querySelector('.h-full.w-\\[260px\\]') as HTMLElement;
        if (targetDiv) {
            targetDiv.style.width = '500px';
            secondTargetDiv.style.width = '500px';
            
            console.log('Enforcing width removal:', targetDiv.style.cssText);
        }
    };

    // Use MutationObserver to monitor changes in the DOM and apply the style once
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            enforceWidthChange();
        });
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true,
    });

    // Initial attempt to change the width after a delay to ensure the element is available
    setTimeout(changeWidth, 1000);
});
