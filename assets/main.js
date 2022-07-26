const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UC9k0tTsh_qStx0HPuPftSsg&part=snippet%2Cid&order=date&maxResults=9';
const content = null || document.getElementById('content');
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2a29343696msh65a10513f41c6e9p182b9ajsn7ba043843a40',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(uriApi) {
	const response = await fetch(uriApi, options);
	const data = await response.json();
	return data;
}

(async () => {
	try {
		const videos = await fetchData(API);
    console.log("🚀 ~ file: main.js ~ line 20 ~ videos", videos)
		let view = `
		${videos.items.map((video) => `
		<div class="group relative">
		<div
			class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
			<img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
		</div>
		<div class="mt-4 flex justify-between">
			<h3 class="text-sm text-gray-700">
				<span aria-hidden="true" class="absolute inset-0"></span>
				${video.snippet.title}
			</h3>
		</div>
	</div>
		`).slice(0, 4).join('')}
	`;
	content.innerHTML = view;
	} catch (error) {
		console.error(error);
	}
})();