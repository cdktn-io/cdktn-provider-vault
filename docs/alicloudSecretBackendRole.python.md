# `alicloudSecretBackendRole` Submodule <a name="`alicloudSecretBackendRole` Submodule" id="@cdktn/provider-vault.alicloudSecretBackendRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AlicloudSecretBackendRole <a name="AlicloudSecretBackendRole" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/alicloud_secret_backend_role vault_alicloud_secret_backend_role}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.Initializer"></a>

```python
from cdktn_provider_vault import alicloud_secret_backend_role

alicloudSecretBackendRole.AlicloudSecretBackendRole(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  mount: str,
  name: str,
  inline_policies: IResolvable | typing.List[AlicloudSecretBackendRoleInlinePolicies] = None,
  max_ttl: typing.Union[int, float] = None,
  namespace: str = None,
  remote_policies: IResolvable | typing.List[AlicloudSecretBackendRoleRemotePolicies] = None,
  role_arn: str = None,
  ttl: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.Initializer.parameter.mount">mount</a></code> | <code>str</code> | Path of the AliCloud Secret Backend the role belongs to. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the role. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.Initializer.parameter.inlinePolicies">inline_policies</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePolicies">AlicloudSecretBackendRoleInlinePolicies</a>]</code> | inline_policies block. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.Initializer.parameter.maxTtl">max_ttl</a></code> | <code>typing.Union[int, float]</code> | The maximum allowed lifetime of credentials issued using this role. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.Initializer.parameter.remotePolicies">remote_policies</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePolicies">AlicloudSecretBackendRoleRemotePolicies</a>]</code> | remote_policies block. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.Initializer.parameter.roleArn">role_arn</a></code> | <code>str</code> | ARN of the RAM role to assume. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.Initializer.parameter.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | Duration in seconds after which the issued credentials should expire. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.Initializer.parameter.mount"></a>

- *Type:* str

Path of the AliCloud Secret Backend the role belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/alicloud_secret_backend_role#mount AlicloudSecretBackendRole#mount}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.Initializer.parameter.name"></a>

- *Type:* str

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/alicloud_secret_backend_role#name AlicloudSecretBackendRole#name}

---

##### `inline_policies`<sup>Optional</sup> <a name="inline_policies" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.Initializer.parameter.inlinePolicies"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePolicies">AlicloudSecretBackendRoleInlinePolicies</a>]

inline_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/alicloud_secret_backend_role#inline_policies AlicloudSecretBackendRole#inline_policies}

---

##### `max_ttl`<sup>Optional</sup> <a name="max_ttl" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.Initializer.parameter.maxTtl"></a>

- *Type:* typing.Union[int, float]

The maximum allowed lifetime of credentials issued using this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/alicloud_secret_backend_role#max_ttl AlicloudSecretBackendRole#max_ttl}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/alicloud_secret_backend_role#namespace AlicloudSecretBackendRole#namespace}

---

##### `remote_policies`<sup>Optional</sup> <a name="remote_policies" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.Initializer.parameter.remotePolicies"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePolicies">AlicloudSecretBackendRoleRemotePolicies</a>]

remote_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/alicloud_secret_backend_role#remote_policies AlicloudSecretBackendRole#remote_policies}

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.Initializer.parameter.roleArn"></a>

- *Type:* str

ARN of the RAM role to assume.

If provided, inline_policies and remote_policies should be blank. The trusted principal of the role must be configured to allow assumption by the access key and secret configured in the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/alicloud_secret_backend_role#role_arn AlicloudSecretBackendRole#role_arn}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.Initializer.parameter.ttl"></a>

- *Type:* typing.Union[int, float]

Duration in seconds after which the issued credentials should expire.

Defaults to 0, in which case the value will fallback to the system/mount defaults.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/alicloud_secret_backend_role#ttl AlicloudSecretBackendRole#ttl}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.putInlinePolicies">put_inline_policies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.putRemotePolicies">put_remote_policies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.resetInlinePolicies">reset_inline_policies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.resetMaxTtl">reset_max_ttl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.resetRemotePolicies">reset_remote_policies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.resetRoleArn">reset_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.resetTtl">reset_ttl</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_inline_policies` <a name="put_inline_policies" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.putInlinePolicies"></a>

```python
def put_inline_policies(
  value: IResolvable | typing.List[AlicloudSecretBackendRoleInlinePolicies]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.putInlinePolicies.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePolicies">AlicloudSecretBackendRoleInlinePolicies</a>]

---

##### `put_remote_policies` <a name="put_remote_policies" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.putRemotePolicies"></a>

```python
def put_remote_policies(
  value: IResolvable | typing.List[AlicloudSecretBackendRoleRemotePolicies]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.putRemotePolicies.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePolicies">AlicloudSecretBackendRoleRemotePolicies</a>]

---

##### `reset_inline_policies` <a name="reset_inline_policies" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.resetInlinePolicies"></a>

```python
def reset_inline_policies() -> None
```

##### `reset_max_ttl` <a name="reset_max_ttl" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.resetMaxTtl"></a>

```python
def reset_max_ttl() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_remote_policies` <a name="reset_remote_policies" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.resetRemotePolicies"></a>

```python
def reset_remote_policies() -> None
```

##### `reset_role_arn` <a name="reset_role_arn" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.resetRoleArn"></a>

```python
def reset_role_arn() -> None
```

##### `reset_ttl` <a name="reset_ttl" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.resetTtl"></a>

```python
def reset_ttl() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a AlicloudSecretBackendRole resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.isConstruct"></a>

```python
from cdktn_provider_vault import alicloud_secret_backend_role

alicloudSecretBackendRole.AlicloudSecretBackendRole.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.isTerraformElement"></a>

```python
from cdktn_provider_vault import alicloud_secret_backend_role

alicloudSecretBackendRole.AlicloudSecretBackendRole.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.isTerraformResource"></a>

```python
from cdktn_provider_vault import alicloud_secret_backend_role

alicloudSecretBackendRole.AlicloudSecretBackendRole.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.generateConfigForImport"></a>

```python
from cdktn_provider_vault import alicloud_secret_backend_role

alicloudSecretBackendRole.AlicloudSecretBackendRole.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a AlicloudSecretBackendRole resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AlicloudSecretBackendRole to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AlicloudSecretBackendRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/alicloud_secret_backend_role#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AlicloudSecretBackendRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.inlinePolicies">inline_policies</a></code> | <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList">AlicloudSecretBackendRoleInlinePoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.remotePolicies">remote_policies</a></code> | <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList">AlicloudSecretBackendRoleRemotePoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.inlinePoliciesInput">inline_policies_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePolicies">AlicloudSecretBackendRoleInlinePolicies</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.maxTtlInput">max_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.mountInput">mount_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.remotePoliciesInput">remote_policies_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePolicies">AlicloudSecretBackendRoleRemotePolicies</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.ttlInput">ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.maxTtl">max_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.mount">mount</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `inline_policies`<sup>Required</sup> <a name="inline_policies" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.inlinePolicies"></a>

```python
inline_policies: AlicloudSecretBackendRoleInlinePoliciesList
```

- *Type:* <a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList">AlicloudSecretBackendRoleInlinePoliciesList</a>

---

##### `remote_policies`<sup>Required</sup> <a name="remote_policies" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.remotePolicies"></a>

```python
remote_policies: AlicloudSecretBackendRoleRemotePoliciesList
```

- *Type:* <a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList">AlicloudSecretBackendRoleRemotePoliciesList</a>

---

##### `inline_policies_input`<sup>Optional</sup> <a name="inline_policies_input" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.inlinePoliciesInput"></a>

```python
inline_policies_input: IResolvable | typing.List[AlicloudSecretBackendRoleInlinePolicies]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePolicies">AlicloudSecretBackendRoleInlinePolicies</a>]

---

##### `max_ttl_input`<sup>Optional</sup> <a name="max_ttl_input" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.maxTtlInput"></a>

```python
max_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mount_input`<sup>Optional</sup> <a name="mount_input" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.mountInput"></a>

```python
mount_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `remote_policies_input`<sup>Optional</sup> <a name="remote_policies_input" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.remotePoliciesInput"></a>

```python
remote_policies_input: IResolvable | typing.List[AlicloudSecretBackendRoleRemotePolicies]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePolicies">AlicloudSecretBackendRoleRemotePolicies</a>]

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `ttl_input`<sup>Optional</sup> <a name="ttl_input" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.ttlInput"></a>

```python
ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_ttl`<sup>Required</sup> <a name="max_ttl" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.maxTtl"></a>

```python
max_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.mount"></a>

```python
mount: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.ttl"></a>

```python
ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AlicloudSecretBackendRoleConfig <a name="AlicloudSecretBackendRoleConfig" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.Initializer"></a>

```python
from cdktn_provider_vault import alicloud_secret_backend_role

alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  mount: str,
  name: str,
  inline_policies: IResolvable | typing.List[AlicloudSecretBackendRoleInlinePolicies] = None,
  max_ttl: typing.Union[int, float] = None,
  namespace: str = None,
  remote_policies: IResolvable | typing.List[AlicloudSecretBackendRoleRemotePolicies] = None,
  role_arn: str = None,
  ttl: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.mount">mount</a></code> | <code>str</code> | Path of the AliCloud Secret Backend the role belongs to. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.name">name</a></code> | <code>str</code> | Name of the role. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.inlinePolicies">inline_policies</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePolicies">AlicloudSecretBackendRoleInlinePolicies</a>]</code> | inline_policies block. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.maxTtl">max_ttl</a></code> | <code>typing.Union[int, float]</code> | The maximum allowed lifetime of credentials issued using this role. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.remotePolicies">remote_policies</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePolicies">AlicloudSecretBackendRoleRemotePolicies</a>]</code> | remote_policies block. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.roleArn">role_arn</a></code> | <code>str</code> | ARN of the RAM role to assume. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | Duration in seconds after which the issued credentials should expire. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.mount"></a>

```python
mount: str
```

- *Type:* str

Path of the AliCloud Secret Backend the role belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/alicloud_secret_backend_role#mount AlicloudSecretBackendRole#mount}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/alicloud_secret_backend_role#name AlicloudSecretBackendRole#name}

---

##### `inline_policies`<sup>Optional</sup> <a name="inline_policies" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.inlinePolicies"></a>

```python
inline_policies: IResolvable | typing.List[AlicloudSecretBackendRoleInlinePolicies]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePolicies">AlicloudSecretBackendRoleInlinePolicies</a>]

inline_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/alicloud_secret_backend_role#inline_policies AlicloudSecretBackendRole#inline_policies}

---

##### `max_ttl`<sup>Optional</sup> <a name="max_ttl" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.maxTtl"></a>

```python
max_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum allowed lifetime of credentials issued using this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/alicloud_secret_backend_role#max_ttl AlicloudSecretBackendRole#max_ttl}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/alicloud_secret_backend_role#namespace AlicloudSecretBackendRole#namespace}

---

##### `remote_policies`<sup>Optional</sup> <a name="remote_policies" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.remotePolicies"></a>

```python
remote_policies: IResolvable | typing.List[AlicloudSecretBackendRoleRemotePolicies]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePolicies">AlicloudSecretBackendRoleRemotePolicies</a>]

remote_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/alicloud_secret_backend_role#remote_policies AlicloudSecretBackendRole#remote_policies}

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

ARN of the RAM role to assume.

If provided, inline_policies and remote_policies should be blank. The trusted principal of the role must be configured to allow assumption by the access key and secret configured in the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/alicloud_secret_backend_role#role_arn AlicloudSecretBackendRole#role_arn}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.ttl"></a>

```python
ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Duration in seconds after which the issued credentials should expire.

Defaults to 0, in which case the value will fallback to the system/mount defaults.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/alicloud_secret_backend_role#ttl AlicloudSecretBackendRole#ttl}

---

### AlicloudSecretBackendRoleInlinePolicies <a name="AlicloudSecretBackendRoleInlinePolicies" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePolicies.Initializer"></a>

```python
from cdktn_provider_vault import alicloud_secret_backend_role

alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePolicies(
  policy_document: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePolicies.property.policyDocument">policy_document</a></code> | <code>str</code> | JSON-encoded inline policy document. |

---

##### `policy_document`<sup>Required</sup> <a name="policy_document" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePolicies.property.policyDocument"></a>

```python
policy_document: str
```

- *Type:* str

JSON-encoded inline policy document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/alicloud_secret_backend_role#policy_document AlicloudSecretBackendRole#policy_document}

---

### AlicloudSecretBackendRoleRemotePolicies <a name="AlicloudSecretBackendRoleRemotePolicies" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePolicies.Initializer"></a>

```python
from cdktn_provider_vault import alicloud_secret_backend_role

alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePolicies(
  name: str,
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePolicies.property.name">name</a></code> | <code>str</code> | Name of the remote policy. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePolicies.property.type">type</a></code> | <code>str</code> | Type of the remote policy (System or Custom). |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePolicies.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the remote policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/alicloud_secret_backend_role#name AlicloudSecretBackendRole#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePolicies.property.type"></a>

```python
type: str
```

- *Type:* str

Type of the remote policy (System or Custom).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/alicloud_secret_backend_role#type AlicloudSecretBackendRole#type}

---

## Classes <a name="Classes" id="Classes"></a>

### AlicloudSecretBackendRoleInlinePoliciesList <a name="AlicloudSecretBackendRoleInlinePoliciesList" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.Initializer"></a>

```python
from cdktn_provider_vault import alicloud_secret_backend_role

alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AlicloudSecretBackendRoleInlinePoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePolicies">AlicloudSecretBackendRoleInlinePolicies</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[AlicloudSecretBackendRoleInlinePolicies]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePolicies">AlicloudSecretBackendRoleInlinePolicies</a>]

---


### AlicloudSecretBackendRoleInlinePoliciesOutputReference <a name="AlicloudSecretBackendRoleInlinePoliciesOutputReference" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.Initializer"></a>

```python
from cdktn_provider_vault import alicloud_secret_backend_role

alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.property.policyDocumentInput">policy_document_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.property.policyDocument">policy_document</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePolicies">AlicloudSecretBackendRoleInlinePolicies</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `policy_document_input`<sup>Optional</sup> <a name="policy_document_input" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.property.policyDocumentInput"></a>

```python
policy_document_input: str
```

- *Type:* str

---

##### `policy_document`<sup>Required</sup> <a name="policy_document" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.property.policyDocument"></a>

```python
policy_document: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AlicloudSecretBackendRoleInlinePolicies
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePolicies">AlicloudSecretBackendRoleInlinePolicies</a>

---


### AlicloudSecretBackendRoleRemotePoliciesList <a name="AlicloudSecretBackendRoleRemotePoliciesList" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.Initializer"></a>

```python
from cdktn_provider_vault import alicloud_secret_backend_role

alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AlicloudSecretBackendRoleRemotePoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePolicies">AlicloudSecretBackendRoleRemotePolicies</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[AlicloudSecretBackendRoleRemotePolicies]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePolicies">AlicloudSecretBackendRoleRemotePolicies</a>]

---


### AlicloudSecretBackendRoleRemotePoliciesOutputReference <a name="AlicloudSecretBackendRoleRemotePoliciesOutputReference" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.Initializer"></a>

```python
from cdktn_provider_vault import alicloud_secret_backend_role

alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePolicies">AlicloudSecretBackendRoleRemotePolicies</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AlicloudSecretBackendRoleRemotePolicies
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePolicies">AlicloudSecretBackendRoleRemotePolicies</a>

---



