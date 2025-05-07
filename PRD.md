# PRD: LLM Arena Logger

## I. Core Data Structure & Input
The application needs to store the following information for each record. When inputting a new record, use appropriate UI controls:

1.  **LLM Model Name:** (Text input with autocomplete, or Dropdown from a manageable list)
2.  **Model Version:** (Text input)
3.  **Supplier:** (Dropdown from a manageable list)
4.  **Prompt Domain:** (Dropdown from a manageable list - e.g., 'Physics', 'Digital Art', 'Literature', 'Tool Usage', 'Life Skills')
5.  **Prompt Type:** (Dropdown from a manageable list - e.g., 'Image Recognition', 'Code Generation', 'Text Generation', 'Summarization', 'Translation', 'Q&A')
6.  **Prompt Version:** (Text input, for user's own versioning of a specific prompt)
7.  **Prompt Content:** (Textarea, allowing multi-line input)
8.  **Deep Thinking Enabled:** (Checkbox or Toggle switch - Boolean)
9.  **Web Search Enabled:** (Checkbox or Toggle switch - Boolean)
10. **Deep Research Enabled:** (Checkbox or Toggle switch - Boolean)
11. **LLM Response:** (Textarea, allowing multi-line input, with markdown rendering for the display of the response)
12. **Screenshot(s):** (File upload allowing multiple image files. These should be displayed only in the detailed view of a record.)
13. **User Rating:** (Numeric input, e.g., a 1-5 star rating system or a 1-10 scale)
14. **User Evaluation/Notes:** (Textarea for user's subjective comments)
15. **External Evaluator Name/Version:** (Text input - for the name and version of the external tool/model that performed the evaluation)
16. **External Evaluation Score:** (Numeric input - e.g., a score from 0-100, or specific metrics like BLEU, ROUGE, if applicable, provided by the external evaluator)
17. **External Evaluation Details:** (Textarea - for qualitative feedback or detailed output from the external evaluator)
18. **Record Date/Time:** (Automatically timestamped on creation, but should also be editable by the user)

## II. Homepage / Main View

*   **Record Listing:** Display all recorded interactions in a list or card format.
    *   **Default View (Important Information):** LLM Model Name, Prompt Domain, Prompt Type, a snippet of Prompt Content, User Rating, a snippet of LLM Response, and Record Date.
    *   **Expandable/Detailed View:** Allow users to click on a record to navigate to a dedicated detail page or expand it in place to see all its fields, including all screenshots.
    *   Implement pagination for handling a large number of records.
*   **"Add New Record" Button:** A prominent and easily accessible button to navigate to the data entry form.

## III. Data Entry Form

*   A dedicated page or modal for inputting the fields listed in Section I.
*   Use intuitive UI controls:
    *   Dropdowns for "LLM Model Name," "Supplier," "Prompt Domain," and "Prompt Type."
    *   Text inputs for short text fields.
    *   Textareas for "Prompt Content," "LLM Response," "User Evaluation/Notes," and "External Evaluation Details."
    *   Checkboxes or toggle switches for boolean values.
    *   A well-designed file uploader for multiple screenshots.
    *   A star rating component or a slider for "User Rating."
    *   Numeric input for "External Evaluation Score."
*   Clear "Save" and "Cancel" buttons with appropriate user feedback on action completion.

## IV. Metadata Management

*   Implement a dedicated "Settings" or "Manage Metadata" page.
*   Users must be able to add, edit, and delete options for the following fields, which will then populate the respective dropdowns in the input form:
    *   LLM Model Name
    *   Supplier
    *   Prompt Domain
    *   Prompt Type

## V. Filtering, Searching, and Analytics

*   **Filtering:** Allow users to filter the record list based on combinations of the following criteria:
    *   LLM Model Name
    *   Model Version
    *   Supplier
    *   Date range (for Record Date/Time)
    *   User Rating range
    *   Prompt Domain
    *   Prompt Type
    *   Deep Thinking Enabled (Yes/No)
    *   Web Search Enabled (Yes/No)
    *   Deep Research Enabled (Yes/No)
*   **Searching:** Implement a global search bar. The search should query:
    *   Prompt Content
    *   LLM Response
    *   User Evaluation/Notes
    *   External Evaluation Details
*   **Statistical Charts (Analytics Dashboard):**
    *   Create a dedicated "Analytics" or "Dashboard" page.
    *   Design charts to help users visually understand LLM performance and usage patterns. Key charts to include:
        1.  **LLM Proficiency by Prompt Type:** A grouped bar chart or heatmap showing average "User Rating" (and/or average "External Evaluation Score") for each "LLM Model Name" across different "Prompt Types".
        2.  **LLM & Version Performance Comparison:** A bar chart comparing the average "User Rating" (and/or average "External Evaluation Score") for different "LLM Model Names" and their specific "Model Versions".
        3.  **Prompt Domain/Type Usage:** Pie charts or bar charts showing the distribution of records by "Prompt Domain" and "Prompt Type".
        4.  **Rating Distribution:** A histogram showing the distribution of "User Ratings" across all records.
        5.  **Same Prompt, Different LLMs Comparison:** A specific chart allowing users to visualize performance for instances where the *exact same 'Prompt Content'* has been recorded with different 'LLM Model Names'.

## VI. Design and Usability

*   **Aesthetics:** Modern, minimalist design. Clean lines, ample whitespace, readable typography, and a professional color palette.
*   **Responsiveness:** The application must be fully responsive and work well on desktop, tablet, and mobile devices.
*   **User Experience:**
    *   Intuitive navigation structure.
    *   Clear visual hierarchy and calls to action.
    *   Informative feedback messages for user actions.
    *   Easy editing and deletion of existing records (with confirmation dialogs).

## VII. Technical Stack & Implementation Details

*   **Backend:** Python with Flask framework.
*   **Frontend:** JavaScript with React framework.
*   **Database:** Utilize sqlite DB for data persistence.
*   **API Design:** Design clear RESTful API endpoints for communication between the React frontend and Flask backend.
*   **Code Quality:** Ensure the generated code is well-structured, modular, and includes comments for maintainability.
