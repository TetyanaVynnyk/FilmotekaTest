import { galleryList, fetchApi, pagination } from '../index';
import { renderGallery } from './renderGallery';

export async function renderTrendingFilms() {
  galleryList.innerHTML = '';
  fetchApi.page = 1;
  await fetchApi.fillGenreList();
  const { data } = await fetchApi.fetchTrendingFilms();
  renderGallery(data.results);

  pagination.showPagination().addPagesNumbers(data);
}
