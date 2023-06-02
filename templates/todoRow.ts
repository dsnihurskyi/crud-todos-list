interface TodoRowFields {
  title: string,
  id: string,
  completed: boolean,
};

export default function todoRow({ title, completed, id }: TodoRowFields) {
  return (`
    <tr class="${completed ? 'table-info' : ''}">
      <td>
        <input
          name="title"
          type="text"
          class="form-control customize-title-input ${completed ? 'completed-title-text' : ''}"
          value="${title}"
          hx-put="/${id}"
          hx-include="closest tr"
        />
      </td>
      <td>
        <input
          name="completed"
          type="checkbox"
          class="form-check-input"
          hx-put="/${id}"
          hx-include="closest tr"
          ${completed && 'checked'}
        />
      </td>
      <td>
        <button hx-delete="/${id}" class="btn btn-secondary">
          Delete
        </button>
      </td>
    </tr>
  `);
};
