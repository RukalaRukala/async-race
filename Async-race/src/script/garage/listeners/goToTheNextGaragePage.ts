import { data } from '../../data/data';
import { tagsData } from '../../data/tagsData';
import { viewCurrentPage } from '../functions/viewCurrentPage';

export function goToTheNextGaragePage() {
    const pageQuantity = Math.ceil(data.carList.length / 7);
    const pageNum = +tagsData.pageNumber.innerHTML;
    tagsData.pageNumber.innerHTML = `${pageNum + 1}`;
    tagsData.prev.disabled = false;
    if (pageNum + 1 === pageQuantity) tagsData.next.disabled = true;
    viewCurrentPage(pageNum + 1);
}
