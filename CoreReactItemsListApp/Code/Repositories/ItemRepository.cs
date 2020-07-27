using CoreReactItemsListApp.Code.Repositories.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoreReactItemsListApp.Code.Repositories
{
    public class ItemRepository : IItemRepository
    {
        private List<Item> _list;

        public ItemRepository()
        {
            _list = new List<Item>();
            /*_list = new List<Item>
            {
                new Item() { Text = "Demo 1" },
                new Item() { Text = "Demo 1" }
            };*/
        }

        public IEnumerable<Item> Get()
        {
            return _list;
        }

        public Item Add(Item item)
        {
            _list.Add(item);
            return item;
        }
    }
}
