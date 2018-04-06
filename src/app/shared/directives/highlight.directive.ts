import { Directive,
         Input, 
         Renderer2, // wrapper on top on DOM APIs
         ElementRef,
         HostListener,
         OnInit
} from '@angular/core';

@Directive({
  selector: '[appHighlight]', // MUST []
})
export class HighlightDirective implements OnInit {

  @Input()
  color: string;

  // inject host element

  constructor(private hostElement: ElementRef,
              private renderer: Renderer2
  ) { 
    console.log('highlight directive created');
  }

  ngOnInit() {
    console.log('directive oninit');

    // default grey
    this.color = this.color || 'grey';

    console.log("Color ", this.color);
  }

  @HostListener("click")
  onClick() {
    console.log("host click");
  }

  @HostListener("mouseenter")
  onEnter() {
    
    this.renderer
    .setStyle(this.hostElement.nativeElement,
             "background",
            this.color);
  }

  @HostListener("mouseleave")
  onLeave() {
    this.renderer
    .removeStyle(this.hostElement.nativeElement,
                 "background");
  }

}
