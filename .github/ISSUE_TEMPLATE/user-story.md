---
name: User Story Template
about: Create a user story
---

Title: Browse gift items
As a user
I want to browse gift items
So that I can find the perfect gift
Labels: backlog

Details and Assumptions:
- User accesses gift store without login required
- Database contains gift items with name, price, category
- User sees item thumbnails and descriptions

Acceptance Criteria (Gherkin syntax):
Given the user is on the gift store homepage
When the user selects the Browse Gifts option
Then the user should see a list of available gift items
And each gift item should display its name, price, and category

Notes:
- 8 user stories exist in repo with labels: new, icebox, technical-debt, backlog
- This template follows Gherkin format for acceptance criteria
