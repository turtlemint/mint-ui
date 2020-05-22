### 6.1.3
#### Changed
- Select with modal support
- Select data options with custom key support
- Select with group data options support
- Snapshots and story accommodations for both the components
#### Added
- New Icon's added - Gold, Loans, Mutual Funds, Something else, Mobile, Circle filled

### 6.0.0
#### Changed
- Select static data options API changes
- Select Async data options API changes
- Typeahead API for JSON config structure
- Snapshots and story accommodations for both the components
#### Added
- Typography component

### 5.1.0
#### Changed
- Adjusted Panel header fonts, spacing and colours to align more with Turtlemint theme
- Enhanced story of extra to mock checkout flow behaviour.
- removed colors.ts duplicate package in root of src.

### 5.0.0
#### Changed
- Changed the API for Collapse to use panels instead of children
- Removed accordion prop

### 4.0.0
#### Changed
- Changed the API for radiogroup to use radios prop for rendering children
- fixed Panel export

### 3.9.0
#### Added
- Async Select

### 3.8.0
#### Added
- Progress Bar component

### 3.7.0
#### Added
- Form Row Component for handling layout for multiple action buttons alonside submit

### 3.4.0
#### Added
- RangeSelector component

### 3.3.1
#### Changed
- Form onSubmit handler

### 3.4.0-alpha.0
#### Added
- Form seed state
- Select placeholder

### 3.3.0
#### Added
- Form validate API added ( imperative approach )
- FormItems Prop Table added to Form stories
- Demonstrated validate API in form stories

### 3.2.1
#### Changed
- COLORS shifted to mint-ui package
- core package deleted

### 3.2.0
#### Added
- Callback for table sorting added
- pageSize prop added to pagination

### 3.1.0
#### Changed
- Storybook Addons Info replaced by Addon Docs
- Migrated stories to use CSF format

### 3.0.0 ( February 2020)
#### Added
- Flexbox Grid

### 3.0.0-alpha.0 ( February 2020)
#### Added
- Button component: added block prop

#### Changed
- Button component: Changed the API to use title prop instead of children for text
- Button component: updated prop descriptions and renamed the size prop values to full names
- Button component: modified form stories and modal for button title prop changes

### 2.2.0-alpha.0 ( February 2020)
#### Added
- Disabled state to all form control elements

### 2.1.0 ( February 2020)

#### Added 
- Form component

### 2.1.0-alpha.0 ( January 2020)

#### Added
- Added icons of cloud_download, attachment

#### Changed
- Updated Rating icons

### 2.0.1 ( January 2020)

#### Added
- ref added on SelectWrapper to trigger onBlur event manually on click of item

### 2.0.0 ( January 2020)

#### Added
- onFocus and onBlur handlers to manage internal state
- added name prop

#### Changed
- Definition of handleChange is updated to handle option ({ text, value }) and name parameter in respective order
- Changed color of Select ArrowToggle of Dropdown to GREY2
- Removed import of Option as a seperate component and added as part of Select itself.

### 1.1.0

#### Added

- Update Storybook to Storybook Docs
- Changelog.md

### 1.0.5-alpha.4

#### Added
- Icons of Call, Email, Report, Search

### 1.0.5-alpha.3


#### Added 
- Help center icons - rating_1, rating_2, rating_3, rating_4, rating_5, rating_filled_1, rating_filled_2, rating_filled_3, rating_filled_4, rating_filled_5, sentiment_satisfied, sentiment_dissatisfied, send, mintpro, lock, cancel, add_circle_outline
  

### 1.0.5-alpha.2

#### Changed
- Removed viewBox in Icon Component
- Modified generate-icons script to add --icon flag to preserve the viewBox attribute in ReactSVG components


### 1.0.5-alpha.1

#### Added
- Table component - Added description to props for propsTable in Storybook
- Table component - hide pagination

#### Changed
- display name fix in Icon story for icon fast_rewind

### 1.0.5-alpha.0

#### Changed
- Table story - Corrected the dataSource length
- Table story - Removed onMouseEnter and leave handlers from onRow story for performance improvement

### 1.0.4

#### Added 
- Pagination export to library


### 1.0.3

#### Added
- Pagination component
- Icons - fast_forward, fast_rewind, more_horiz

#### Changed
- icon name case changed to snake_case
- button display from flex to inline-flex
