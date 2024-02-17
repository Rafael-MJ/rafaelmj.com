import { Component } from '@angular/core';

import { commonModuleUtils } from 'src/app/utils/RoutingUtils';
import { ScreenSupport } from 'src/app/utils/ScreenUtils';
import { Screens } from 'src/app/utils/ScreenUtils';

import { GenArrowsComponent } from '../../general/gen-arrows/gen-arrows.component';
import { GenInfoComponent } from '../../general/gen-info/gen-info.component';

@Component({
  selector: 'app-scr-knowledge',
  standalone: true,
  imports: [commonModuleUtils, GenArrowsComponent, GenInfoComponent],
  templateUrl: './scr-knowledge.component.html',
  styleUrls: ['./scr-knowledge.component.css'],
})
export class ScrKnowledgeComponent {
  ngOnInit() {
    if (typeof window !== 'undefined') {
      ScreenSupport.setCurrentScreen(Screens.Knowledge);
    }
  }
}
