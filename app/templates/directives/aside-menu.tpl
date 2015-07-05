<div>
	<aside class='aside-menu' ng-class='{"aside-menu-shown":asideMenuShown}' ng-show='asideMenuShown'>
		<div class='hide-aside-menu' ng-click='hideAsideMenu()'>
			<span class='glyphicon glyphicon-chevron-left'></span>
		</div>
	    <nav>
			<ul>
				<li ng-repeat='menuItem in menuElements' class='header'><a class='menu-link' ui-sref="{{::menuItem.sref}}">{{::menuItem.display}}<i ng-if="menuItem.note" class='browser-note'> {{::menuItem.note}}</i></a>
					<ul ng-if='menuItem.subItems'>
						<li ng-repeat='subItem in menuItem.subItems' class='sub-header'>
			        		<a class='menu-link' ui-sref="{{::subItem.sref}}">{{::subItem.display}}<i ng-if="subItem.note" class='small-browser-note'> {{::subItem.note}}</i></a>
			        	</li>
					</ul>
				</li>
			</ul>
		</nav>
	</aside>
	<div class='show-aside-menu' ng-class='{"show-aside-menu-shown":!asideMenuShown}' ng-hide='asideMenuShown' ng-click='showAsideMenu()'>
		<span class='glyphicon glyphicon-chevron-right'></span>
	</div>
</div>