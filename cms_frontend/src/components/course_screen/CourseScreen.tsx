import GroupingDropdown from "../grouping/GroupingDropdown";
import Navbar from "../navbar/Navbar";
import SearchBar from "../search_bar/SearchBar";
import SortDropdown from "../sort_by/SortDropdown";
import Spinner from "../spinner/Spinner";
import ViewAs from "../view_mode/ViewAs";
import "./CourseScreen.css";

const CourseScreen = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="top-controls">
            <div className="title">
               <h5>Course overview</h5>
            </div>
            <hr className="mt-0"/>

            <div className="actions">
              <GroupingDropdown/>
              <SearchBar onSubmit={undefined}/>
              <SortDropdown onSort={undefined}/>
              <ViewAs onViewModeChange={undefined}/>
            </div>
        </div>
        <Spinner/>
      </div>
    </>
  );
};

export default CourseScreen;
