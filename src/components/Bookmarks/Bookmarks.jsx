import Bookmark from '../Bookmark/Bookmark';

import PropTypes from 'prop-types';
const Bookmarks = ({ bookmarks, readingTime }) => {
    return (




        <div className="w-1/3 bg-slate-400  ml-5 mt-4 p-4 rounded-xl">
            <h2 className="text-3xl bg-white p-4 mb-4">Spent Reading Time:{readingTime}</h2>

            <h2 className="text-2xl text-center">Bookmarks:{bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, idx) => <Bookmark
                    bookmark={bookmark}
                    key={idx}></Bookmark>)
            }
        </div>

    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number.isRequired
}

export default Bookmarks;