// 物件 call by sharing 特性，會影響理解指標那塊（previous = current; current = current.next）
/**
 * 注意別再搞錯 i++, ++i
 */
export function LinkedList() {
	var Node = function (element) {
		this.element = element;
		this.next = null;
	};

	var length = 0;
	var head = null;

	/**
	 * 向串列結尾添加新項目
	 */
	this.append = function (element) {
		var node = new Node(element),
			current; // 跌到的的目前那個項目

		if (head === null) {
			head = node;
		} else {
			// 如果已經有串列，放到 current
			current = head;

			while (current.next) {
				current = current.next;
			}
			// 現在的 current 經迭代後，就是最後一個！
			current.next = node;
		}
		length++
	};

	/**
	 * 特定位置插入新項目
	 */
	this.insert = function (position, element) {
		if (position >= 0 && position <= length) {
			var node = new Node(element),
				current = head,
				previous,
				index = 0;	

			if (position === 0) {
				node.next = current;
				head = node;
			} else {
				while (index++ < position) {
					previous = current;
					current = current.next;
				}
				node.next = current;
				previous.next = node;
			}
			length++;
			return true;
		} else {
			return false;
		}
	};

	/**
	 * 向串列中特定位置移除項目
	 */
	this.removeAt = function (position) {
		// 先確認合法的 position 位置
		if (position > -1 && position < length) {
			// 目前迭代元素設定為 head（也就是從頭開始）
			var current = head,
				previous,
				index = 0; // 用來迭代的起始 index
			if (position === 0) {
				// 如果刪第一個，就把 current 的 next 蓋到 current
				head = current.next;
			} else {
				while (index++ < position) {
					// 假設 3
					// 第 1 次操作 0，就是把目前的放到前一個。把目前的蓋過去
					// 第 2 次操作 1，就是把目前的放到前一個。把目前的蓋過去

					previous = current;
					current = current.next;
				}
				// 此時 current 已經是我們要找的位置
				// 我們要把它丟掉
				// 我們把它的前一個的 next 指向它的下一個
				previous.next = current.next;
				/**
				 *  !!這行關鍵，等於是在找到符合的 current 後，
				 *  將 current 的 next，蓋到 previous 的 next
				 */
			}
			length--;
			return current.element;
		} else {
			return null;
		}
	};

	/**
	 * 從串列中移除一項
	 */
	this.remove = function (element) {

	};

	/**
	 * 返回元素在串列中索引，沒有返回 -1
	 */
	this.indexOf = function (element) {
		var current = head,
			index = 0;
		while (current) {
			if (element === current.element) {
				return index;
			}
			index++;
			current = current.next;
		}
		return -1;
	};

	/**
	 * 如果串列中不包含任何項目，返回 true，反之
	 */
	this.isEmpty = function () {
		return length === 0
	};

	/**
	 * 與 lenght 類似
	 */
	this.size = function () {
		return length
	};
	this.toString = function () {
		var current = head,
			string = "";

		while (current) {
			string += current.element;
			current = current.next;
		}
		return string;
	};
	this.print = function () {};
	this.getHead = function (){
		return head
	}
}

export function DoublyLinkedList(){
	var Node = function(element) {
		this.element = element
		this.next = null
		this.prev = null
	}

	var length = 0
	var head = null
	var tail = null

	this.insert = function(position, element) {
		if(position >= 0 && position < length) {
			// 新加入的 node
			var node = new Node(element),
				current = head, // 指位器移到 current
				previous,
				index = 0
			
			// 假如插入位置為 0
			if(position === 0) {
				if(!head) {
					head = node
					tail = node // ?
				} else {
					// 已經有一個，在他前面再加一個
					// 把現有的加到新的 next
				  // 現在的加一個 prev 等於新的
					// head 現在變為 node（只要前面加新的，整個 head 就會變那個新的）
					node.next = current
					current.prev = node
					head = node
				}
			} else if(position === length) {
				current = tail // 指標到最後一個
				current.next = node
				node.prev = current
				tail = node
			} else {
				while(index++ < position) {
					previous = current
					current = current.next
				}
				node.next = current
				previous.next = node

				current.prev = node
				node.prev = previous
			}
			length++
			return true
		} else {
			return false
		}
	}
}
