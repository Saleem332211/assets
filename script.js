document.addEventListener('DOMContentLoaded', () => {
				const input = document.getElementById('searchInput');
				const suggestions = document.getElementById('suggestions');
				input.addEventListener('input', () => {
					const value = input.value.trim();
					if (value.length > 0) {
						const filteredSuggestions = fetchSuggestionsFromServer(value);
						if (filteredSuggestions.length > 0) {
							updateSuggestions(filteredSuggestions);
						} else {
							showAllServices();
						}
					} else {
						hideSuggestions();
					}
				});
				input.addEventListener('focus', () => {
					suggestions.style.display = 'block';
				});
				input.addEventListener('blur', () => {
					setTimeout(() => {
						suggestions.style.display = 'none';
					}, 200);
				});
			});

			function fetchSuggestionsFromServer(query) {
				const suggestions = [{
					text: 'TV Repair Service',
					link: 'http://www.refixtumkur.in/book-services/page-56504119'
				}, {
					text: 'LED TV Repair',
					link: 'http://www.refixtumkur.in/book-services/page-56504119'
				}, {
					text: 'Washing Machine Repair',
					link: 'http://www.refixtumkur.in/book-services/page-56504119'
				}, {
					text: 'Refrigerator Repair',
					link: 'http://www.refixtumkur.in/book-services/page-56504119'
				}, {
					text: 'Oven Repair',
					link: 'http://www.refixtumkur.in/book-services/page-56504119'
				}, {
					text: 'Geyser water heater repair',
					link: 'http://www.refixtumkur.in/book-services/page-56504119'
				}, {
					text: 'Water filter, RO Repair',
					link: 'http://www.refixtumkur.in/book-services/page-56504119'
				}, {
					text: 'AC Repair',
					link: 'http://www.refixtumkur.in/book-services/page-56504119'
				}, {
					text: 'Home Cleaning',
					link: 'http://www.refixtumkur.in/book-services/page-56504119'
				}, {
					text: 'Pest Control',
					link: 'http://www.refixtumkur.in/book-services/page-56504119'
				}, {
					text: 'Laptop Repair',
					link: 'http://www.refixtumkur.in/book-services/page-56504119'
				}, {
					text: 'Mobile Repair',
					link: 'http://www.refixtumkur.in/book-services/page-56504119'
				}, {
					text: 'Other Services',
					link: 'http://www.refixtumkur.in/book-services/page-56504119'
				}, {
					text: 'Repairs',
					link: 'http://www.refixtumkur.in/book-services/page-56504119'
				}, {
					text: 'Plumbing & Electric',
					link: 'http://www.refixtumkur.in/book-services/page-56504119'
				}];
				return suggestions.filter(suggestion => suggestion.text.toLowerCase().includes(query.toLowerCase()));
			}

			function updateSuggestions(suggestions) {
				const container = document.getElementById('suggestions');
				container.innerHTML = '';
				suggestions.forEach(suggestion => {
					const link = document.createElement('a');
					link.href = suggestion.link;
					link.textContent = suggestion.text;
					container.appendChild(link);
				});
				container.style.maxHeight = '200px';
			}

			function showAllServices() {
				const container = document.getElementById('suggestions');
				container.innerHTML = '';
				const allServicesLink = document.createElement('a');
				allServicesLink.href = 'http://www.refixtumkur.in/book-services/page-56504119';
				allServicesLink.textContent = 'All Services';
				container.appendChild(allServicesLink);
				container.style.maxHeight = '200px';
			}

			function hideSuggestions() {
				const suggestions = document.getElementById('suggestions');
				suggestions.style.maxHeight = '0';
			}

			function submitSearch() {
				const input = document.getElementById('searchInput');
				console.log('Search submitted:', input.value);
			}