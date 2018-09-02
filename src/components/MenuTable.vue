<template>
  <v-data-table
    :headers="headers"
    :items="result"
    item-key="date"
    disable-initial-sort
  >
    <template slot="items" slot-scope="props">
      <tr>
        <td>{{ props.item.date }}</td>
        <td class="text-xs-left">{{ props.item.one }}</td>
        <td class="text-xs-left">{{ props.item.two }}</td>
      </tr>
    </template>
  </v-data-table>
</template>

<script>
export default {
  props: ['result'],
  computed: {
    headers() {
      return [
        { text: '日期', value: 'date' },
        { text: '肉', value: 'one' },
        { text: '菜', value: 'two' }
      ]
    }
  }
}
</script>
