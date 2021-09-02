export default async function fetchPicture (query, page) {
    const response = await fetch(`https://pixabay.com/api/?q=${query}&page=${page}&key=22394687-5b263f11c9e1c3bf9700990e1&image_type=photo&orientation=horizontal&per_page=12`);
    if (response.ok) {
        return response.json();
    }
    return await Promise.reject(new Error(`Sorry, but something was wrong,`));
}