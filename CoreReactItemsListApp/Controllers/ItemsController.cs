using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CoreReactItemsListApp;
using CoreReactItemsListApp.Code.Repositories.Interface;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace CoreReactItemsListApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ItemsController : ControllerBase
    {
        private readonly IItemRepository _items;
        private readonly ILogger<ItemsController> _logger;

        public ItemsController(ILogger<ItemsController> logger, IItemRepository items)
        {
            _logger = logger;
            _items = items;
        }

        [HttpGet]
        public IEnumerable<Item> Get()
        {
            return _items.Get();
        }

        [HttpPost]
        public Item Add(Item item)
        {
            Item newW = _items.Add(item);
            return newW;
        }
    }
}
