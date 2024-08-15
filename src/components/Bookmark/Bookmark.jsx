import PropTypes from 'prop-types';

const Bookmark = ({ bookmark }) => {
    const { title } = bookmark;
    return (


        <div className='border-2 bg-slate-100 p-3  mb-4'>
            <h2 className="text-2xl ">{title}</h2>
        </div>

    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired
}
export default Bookmark;