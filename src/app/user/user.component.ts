import {
  Component,
  EventEmitter,
  computed,
  input,
  output,
} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  //selectedUser = signal(DUMMY_USERS[randomIndex]);
  //imagePath = computed(()=>'assets/users/' + this.selectedUser().avatar)
  avatar = input.required<string>();
  name = input.required<string>();
  id = input.required<string>();

  select = output<string>();

  imagePath = computed(() => {
    return '../../assets/users/' + this.avatar();
  });

  onSelectUser() {
    this.select.emit(this.id());
  }
}
