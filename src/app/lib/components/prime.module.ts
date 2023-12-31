import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccordionModule } from 'primeng/accordion';
import { ConfirmationService, MessageService, SharedModule ,} from 'primeng/api';
import { BreadcrumbModule, } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import {ChartModule} from 'primeng/chart';

import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { FileUploadModule } from 'primeng/fileupload';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MultiSelectModule } from 'primeng/multiselect';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { PanelModule } from 'primeng/panel';
import { PasswordModule } from 'primeng/password';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SidebarModule } from 'primeng/sidebar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { StepsModule } from 'primeng/steps';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { ToastModule } from 'primeng/toast';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';
import { VirtualScrollerModule } from 'primeng/virtualscroller';
import {MenubarModule} from 'primeng/menubar';
import {MenuModule} from 'primeng/menu';
import {MenuItem} from 'primeng/api';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {ChipsModule} from 'primeng/chips';
import {InputSwitchModule} from 'primeng/inputswitch';
import {InputNumberModule} from 'primeng/inputnumber';
import { KeyFilterModule } from 'primeng/keyfilter';
import { MessagesModule } from 'primeng/messages';
import { PaginatorModule } from 'primeng/paginator';
import { TimelineModule } from 'primeng/timeline';
import { CarouselModule } from 'primeng/carousel';


@NgModule({
  providers: [ConfirmationService, MessageService, DialogService, DynamicDialogConfig, DynamicDialogRef],
  declarations: [
  ],
  imports: [
    InputSwitchModule,
    DynamicDialogModule,
    CommonModule,
    FormsModule,
    TableModule,
    SharedModule,
    ButtonModule,
    InputTextModule,
    DialogModule,
    ConfirmDialogModule,
    TooltipModule,
    CalendarModule,
    ToggleButtonModule,
    ToastModule,
    ToolbarModule,
    SidebarModule,
    FileUploadModule,
    SelectButtonModule,
    MultiSelectModule,
    DropdownModule,
    SplitButtonModule,
    TabViewModule,
    OverlayPanelModule,
    PasswordModule,
    StepsModule,
    RadioButtonModule,
    BreadcrumbModule,
    ScrollPanelModule,
    CheckboxModule,
    InputMaskModule,
    ProgressSpinnerModule,
    PanelModule,
    AccordionModule,
    InputTextareaModule,
    VirtualScrollerModule,
    MenubarModule,MenuModule,
    ChipsModule,
    InputNumberModule,
    KeyFilterModule,
    MessagesModule,
    PaginatorModule,
    TimelineModule,
    CarouselModule,
    ChartModule
  ],
  exports: [
    InputSwitchModule,
    DynamicDialogModule,
    CommonModule,
    FormsModule,
    TableModule,
    SharedModule,
    ButtonModule,
    InputTextModule,
    DialogModule,
    ConfirmDialogModule,
    TooltipModule,
    CalendarModule,
    ToggleButtonModule,
    SidebarModule,
    ToastModule,
    ToolbarModule,
    FileUploadModule,
    SelectButtonModule,
    MultiSelectModule,
    DropdownModule,
    SplitButtonModule,
    TabViewModule,
    OverlayPanelModule,
    PasswordModule,
    StepsModule,
    RadioButtonModule,
    BreadcrumbModule,
    ScrollPanelModule,
    CheckboxModule,
    InputMaskModule,
    ProgressSpinnerModule,
    PanelModule,
    AccordionModule,
    InputTextareaModule,
    VirtualScrollerModule,
    MenubarModule,MenuModule,
    ChipsModule,
    InputNumberModule,
    KeyFilterModule,
    MessagesModule,
    PaginatorModule,
    TimelineModule,
    CarouselModule,
    ChartModule
  ],
})
export class PrimeModule { }