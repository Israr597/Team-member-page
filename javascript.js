 // Filter functionality
        document.querySelectorAll('.filter-btn').forEach(button => {
            button.addEventListener('click', () => {
                // Update active button
                document.querySelectorAll('.filter-btn').forEach(btn => {
                    btn.classList.remove('active');
                });
                button.classList.add('active');
                
                const filter = button.dataset.filter;
                const members = document.querySelectorAll('.team-member');
                
                members.forEach(member => {
                    if (filter === 'all' || member.dataset.category === filter) {
                        member.style.display = 'block';
                    } else {
                        member.style.display = 'none';
                    }
                });
            });
        });

        // Modal functionality
        const modal = document.getElementById('memberModal');
        const closeBtn = document.querySelector('.close-modal');
        
        // Close modal when clicking X
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
        
        // Close modal when clicking outside
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
        
        // Open modal when clicking team member (optional enhancement)
        document.querySelectorAll('.team-member').forEach(member => {
            member.addEventListener('click', () => {
                const memberClone = member.cloneNode(true);
                const modalContent = document.querySelector('.modal-content');
                
                // Clear previous content
                modalContent.innerHTML = '';
                
                // Add new content
                modalContent.appendChild(memberClone);
                memberClone.style.width = '100%';
                
                // Show modal
                modal.style.display = 'flex';
            });
        });