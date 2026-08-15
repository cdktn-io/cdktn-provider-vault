# `kerberosAuthBackendConfig` Submodule <a name="`kerberosAuthBackendConfig` Submodule" id="@cdktn/provider-vault.kerberosAuthBackendConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KerberosAuthBackendConfig <a name="KerberosAuthBackendConfig" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_config vault_kerberos_auth_backend_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.Initializer"></a>

```python
from cdktn_provider_vault import kerberos_auth_backend_config

kerberosAuthBackendConfig.KerberosAuthBackendConfig(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  keytab_wo: str,
  keytab_wo_version: typing.Union[int, float],
  mount: str,
  service_account: str,
  add_group_aliases: bool | IResolvable = None,
  namespace: str = None,
  remove_instance_name: bool | IResolvable = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.Initializer.parameter.keytabWo">keytab_wo</a></code> | <code>str</code> | Base64-encoded keytab file content (write-only). Must contain an entry matching service_account. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.Initializer.parameter.keytabWoVersion">keytab_wo_version</a></code> | <code>typing.Union[int, float]</code> | Version identifier for keytab updates. Increment this value to trigger a keytab update. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.Initializer.parameter.mount">mount</a></code> | <code>str</code> | Path where the Kerberos auth method is mounted. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.Initializer.parameter.serviceAccount">service_account</a></code> | <code>str</code> | The Kerberos service account associated with the keytab entry (e.g., 'vault_svc'). |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.Initializer.parameter.addGroupAliases">add_group_aliases</a></code> | <code>bool \| cdktn.IResolvable</code> | Adds group aliases during authentication. Default: false. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.Initializer.parameter.removeInstanceName">remove_instance_name</a></code> | <code>bool \| cdktn.IResolvable</code> | Removes instance names from Kerberos service principal names. Default: false. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `keytab_wo`<sup>Required</sup> <a name="keytab_wo" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.Initializer.parameter.keytabWo"></a>

- *Type:* str

Base64-encoded keytab file content (write-only). Must contain an entry matching service_account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_config#keytab_wo KerberosAuthBackendConfig#keytab_wo}

---

##### `keytab_wo_version`<sup>Required</sup> <a name="keytab_wo_version" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.Initializer.parameter.keytabWoVersion"></a>

- *Type:* typing.Union[int, float]

Version identifier for keytab updates. Increment this value to trigger a keytab update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_config#keytab_wo_version KerberosAuthBackendConfig#keytab_wo_version}

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.Initializer.parameter.mount"></a>

- *Type:* str

Path where the Kerberos auth method is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_config#mount KerberosAuthBackendConfig#mount}

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.Initializer.parameter.serviceAccount"></a>

- *Type:* str

The Kerberos service account associated with the keytab entry (e.g., 'vault_svc').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_config#service_account KerberosAuthBackendConfig#service_account}

---

##### `add_group_aliases`<sup>Optional</sup> <a name="add_group_aliases" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.Initializer.parameter.addGroupAliases"></a>

- *Type:* bool | cdktn.IResolvable

Adds group aliases during authentication. Default: false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_config#add_group_aliases KerberosAuthBackendConfig#add_group_aliases}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_config#namespace KerberosAuthBackendConfig#namespace}

---

##### `remove_instance_name`<sup>Optional</sup> <a name="remove_instance_name" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.Initializer.parameter.removeInstanceName"></a>

- *Type:* bool | cdktn.IResolvable

Removes instance names from Kerberos service principal names. Default: false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_config#remove_instance_name KerberosAuthBackendConfig#remove_instance_name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.resetAddGroupAliases">reset_add_group_aliases</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.resetRemoveInstanceName">reset_remove_instance_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_add_group_aliases` <a name="reset_add_group_aliases" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.resetAddGroupAliases"></a>

```python
def reset_add_group_aliases() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_remove_instance_name` <a name="reset_remove_instance_name" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.resetRemoveInstanceName"></a>

```python
def reset_remove_instance_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a KerberosAuthBackendConfig resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.isConstruct"></a>

```python
from cdktn_provider_vault import kerberos_auth_backend_config

kerberosAuthBackendConfig.KerberosAuthBackendConfig.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.isTerraformElement"></a>

```python
from cdktn_provider_vault import kerberos_auth_backend_config

kerberosAuthBackendConfig.KerberosAuthBackendConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.isTerraformResource"></a>

```python
from cdktn_provider_vault import kerberos_auth_backend_config

kerberosAuthBackendConfig.KerberosAuthBackendConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.generateConfigForImport"></a>

```python
from cdktn_provider_vault import kerberos_auth_backend_config

kerberosAuthBackendConfig.KerberosAuthBackendConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a KerberosAuthBackendConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the KerberosAuthBackendConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing KerberosAuthBackendConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the KerberosAuthBackendConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.addGroupAliasesInput">add_group_aliases_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.keytabWoInput">keytab_wo_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.keytabWoVersionInput">keytab_wo_version_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.mountInput">mount_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.removeInstanceNameInput">remove_instance_name_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.serviceAccountInput">service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.addGroupAliases">add_group_aliases</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.keytabWo">keytab_wo</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.keytabWoVersion">keytab_wo_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.mount">mount</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.removeInstanceName">remove_instance_name</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.serviceAccount">service_account</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `add_group_aliases_input`<sup>Optional</sup> <a name="add_group_aliases_input" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.addGroupAliasesInput"></a>

```python
add_group_aliases_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `keytab_wo_input`<sup>Optional</sup> <a name="keytab_wo_input" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.keytabWoInput"></a>

```python
keytab_wo_input: str
```

- *Type:* str

---

##### `keytab_wo_version_input`<sup>Optional</sup> <a name="keytab_wo_version_input" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.keytabWoVersionInput"></a>

```python
keytab_wo_version_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mount_input`<sup>Optional</sup> <a name="mount_input" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.mountInput"></a>

```python
mount_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `remove_instance_name_input`<sup>Optional</sup> <a name="remove_instance_name_input" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.removeInstanceNameInput"></a>

```python
remove_instance_name_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `service_account_input`<sup>Optional</sup> <a name="service_account_input" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.serviceAccountInput"></a>

```python
service_account_input: str
```

- *Type:* str

---

##### `add_group_aliases`<sup>Required</sup> <a name="add_group_aliases" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.addGroupAliases"></a>

```python
add_group_aliases: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### ~~`keytab_wo`~~<sup>Required</sup> <a name="keytab_wo" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.keytabWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```python
keytab_wo: str
```

- *Type:* str

---

##### `keytab_wo_version`<sup>Required</sup> <a name="keytab_wo_version" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.keytabWoVersion"></a>

```python
keytab_wo_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.mount"></a>

```python
mount: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `remove_instance_name`<sup>Required</sup> <a name="remove_instance_name" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.removeInstanceName"></a>

```python
remove_instance_name: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### KerberosAuthBackendConfigConfig <a name="KerberosAuthBackendConfigConfig" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfigConfig.Initializer"></a>

```python
from cdktn_provider_vault import kerberos_auth_backend_config

kerberosAuthBackendConfig.KerberosAuthBackendConfigConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  keytab_wo: str,
  keytab_wo_version: typing.Union[int, float],
  mount: str,
  service_account: str,
  add_group_aliases: bool | IResolvable = None,
  namespace: str = None,
  remove_instance_name: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfigConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfigConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfigConfig.property.keytabWo">keytab_wo</a></code> | <code>str</code> | Base64-encoded keytab file content (write-only). Must contain an entry matching service_account. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfigConfig.property.keytabWoVersion">keytab_wo_version</a></code> | <code>typing.Union[int, float]</code> | Version identifier for keytab updates. Increment this value to trigger a keytab update. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfigConfig.property.mount">mount</a></code> | <code>str</code> | Path where the Kerberos auth method is mounted. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfigConfig.property.serviceAccount">service_account</a></code> | <code>str</code> | The Kerberos service account associated with the keytab entry (e.g., 'vault_svc'). |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfigConfig.property.addGroupAliases">add_group_aliases</a></code> | <code>bool \| cdktn.IResolvable</code> | Adds group aliases during authentication. Default: false. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfigConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfigConfig.property.removeInstanceName">remove_instance_name</a></code> | <code>bool \| cdktn.IResolvable</code> | Removes instance names from Kerberos service principal names. Default: false. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfigConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfigConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `keytab_wo`<sup>Required</sup> <a name="keytab_wo" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfigConfig.property.keytabWo"></a>

```python
keytab_wo: str
```

- *Type:* str

Base64-encoded keytab file content (write-only). Must contain an entry matching service_account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_config#keytab_wo KerberosAuthBackendConfig#keytab_wo}

---

##### `keytab_wo_version`<sup>Required</sup> <a name="keytab_wo_version" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfigConfig.property.keytabWoVersion"></a>

```python
keytab_wo_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Version identifier for keytab updates. Increment this value to trigger a keytab update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_config#keytab_wo_version KerberosAuthBackendConfig#keytab_wo_version}

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfigConfig.property.mount"></a>

```python
mount: str
```

- *Type:* str

Path where the Kerberos auth method is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_config#mount KerberosAuthBackendConfig#mount}

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfigConfig.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

The Kerberos service account associated with the keytab entry (e.g., 'vault_svc').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_config#service_account KerberosAuthBackendConfig#service_account}

---

##### `add_group_aliases`<sup>Optional</sup> <a name="add_group_aliases" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfigConfig.property.addGroupAliases"></a>

```python
add_group_aliases: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Adds group aliases during authentication. Default: false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_config#add_group_aliases KerberosAuthBackendConfig#add_group_aliases}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfigConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_config#namespace KerberosAuthBackendConfig#namespace}

---

##### `remove_instance_name`<sup>Optional</sup> <a name="remove_instance_name" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfigConfig.property.removeInstanceName"></a>

```python
remove_instance_name: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Removes instance names from Kerberos service principal names. Default: false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_config#remove_instance_name KerberosAuthBackendConfig#remove_instance_name}

---



