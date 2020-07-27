using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoreReactItemsListApp.Code.Repositories.Interface
{
    public interface IItemRepository
    {
        IEnumerable<Item> Get();
        Item Add(Item item);
    }
}
