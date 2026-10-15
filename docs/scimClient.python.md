# `scimClient` Submodule <a name="`scimClient` Submodule" id="@cdktn/provider-vault.scimClient"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ScimClient <a name="ScimClient" id="@cdktn/provider-vault.scimClient.ScimClient"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client vault_scim_client}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.scimClient.ScimClient.Initializer"></a>

```python
from cdktn_provider_vault import scim_client

scimClient.ScimClient(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  access_grant_principal: str,
  client_name: str,
  alias_mount_accessor: str = None,
  allowed_extra_alias_mount_accessors: typing.List[str] = None,
  allow_group_adoption: bool | IResolvable = None,
  allow_user_adoption: bool | IResolvable = None,
  default_schema_version: str = None,
  deletion_policy: str = None,
  id: str = None,
  max_active_tokens: typing.Union[int, float] = None,
  max_token_ttl: typing.Union[int, float] = None,
  namespace: str = None,
  timeouts: ScimClientTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.Initializer.parameter.accessGrantPrincipal">access_grant_principal</a></code> | <code>str</code> | Entity ID authorized to call SCIM protocol endpoints on behalf of this client. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.Initializer.parameter.clientName">client_name</a></code> | <code>str</code> | The name of the SCIM client. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.Initializer.parameter.aliasMountAccessor">alias_mount_accessor</a></code> | <code>str</code> | Auth mount accessor used to create entity aliases for SCIM users. Immutable after creation. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.Initializer.parameter.allowedExtraAliasMountAccessors">allowed_extra_alias_mount_accessors</a></code> | <code>typing.List[str]</code> | Additional mount accessors whose aliases may be managed by this SCIM client. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.Initializer.parameter.allowGroupAdoption">allow_group_adoption</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to allow adoption of existing Vault groups by SCIM-provisioned groups. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.Initializer.parameter.allowUserAdoption">allow_user_adoption</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to allow adoption of existing Vault entities by SCIM users. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.Initializer.parameter.defaultSchemaVersion">default_schema_version</a></code> | <code>str</code> | The Vault SCIM extension schema version used for this client. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Controls how linked entities/groups/aliases are handled when this resource is destroyed. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#id ScimClient#id}. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.Initializer.parameter.maxActiveTokens">max_active_tokens</a></code> | <code>typing.Union[int, float]</code> | Maximum number of active tokens for this SCIM client. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.Initializer.parameter.maxTokenTtl">max_token_ttl</a></code> | <code>typing.Union[int, float]</code> | Maximum TTL (in seconds) for tokens issued to this SCIM client. Zero means the cluster default is used. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeouts">ScimClientTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.scimClient.ScimClient.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.scimClient.ScimClient.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.scimClient.ScimClient.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.scimClient.ScimClient.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.scimClient.ScimClient.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.scimClient.ScimClient.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.scimClient.ScimClient.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.scimClient.ScimClient.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.scimClient.ScimClient.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `access_grant_principal`<sup>Required</sup> <a name="access_grant_principal" id="@cdktn/provider-vault.scimClient.ScimClient.Initializer.parameter.accessGrantPrincipal"></a>

- *Type:* str

Entity ID authorized to call SCIM protocol endpoints on behalf of this client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#access_grant_principal ScimClient#access_grant_principal}

---

##### `client_name`<sup>Required</sup> <a name="client_name" id="@cdktn/provider-vault.scimClient.ScimClient.Initializer.parameter.clientName"></a>

- *Type:* str

The name of the SCIM client.

Must be lowercase, because Vault lowercases client names when it stores them. May contain only letters, digits, '*', '-' and '.', and must start and end with a letter, digit or '*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#client_name ScimClient#client_name}

---

##### `alias_mount_accessor`<sup>Optional</sup> <a name="alias_mount_accessor" id="@cdktn/provider-vault.scimClient.ScimClient.Initializer.parameter.aliasMountAccessor"></a>

- *Type:* str

Auth mount accessor used to create entity aliases for SCIM users. Immutable after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#alias_mount_accessor ScimClient#alias_mount_accessor}

---

##### `allowed_extra_alias_mount_accessors`<sup>Optional</sup> <a name="allowed_extra_alias_mount_accessors" id="@cdktn/provider-vault.scimClient.ScimClient.Initializer.parameter.allowedExtraAliasMountAccessors"></a>

- *Type:* typing.List[str]

Additional mount accessors whose aliases may be managed by this SCIM client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#allowed_extra_alias_mount_accessors ScimClient#allowed_extra_alias_mount_accessors}

---

##### `allow_group_adoption`<sup>Optional</sup> <a name="allow_group_adoption" id="@cdktn/provider-vault.scimClient.ScimClient.Initializer.parameter.allowGroupAdoption"></a>

- *Type:* bool | cdktn.IResolvable

Whether to allow adoption of existing Vault groups by SCIM-provisioned groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#allow_group_adoption ScimClient#allow_group_adoption}

---

##### `allow_user_adoption`<sup>Optional</sup> <a name="allow_user_adoption" id="@cdktn/provider-vault.scimClient.ScimClient.Initializer.parameter.allowUserAdoption"></a>

- *Type:* bool | cdktn.IResolvable

Whether to allow adoption of existing Vault entities by SCIM users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#allow_user_adoption ScimClient#allow_user_adoption}

---

##### `default_schema_version`<sup>Optional</sup> <a name="default_schema_version" id="@cdktn/provider-vault.scimClient.ScimClient.Initializer.parameter.defaultSchemaVersion"></a>

- *Type:* str

The Vault SCIM extension schema version used for this client.

Must be "2.0" or "2.2". Leave unset to use Vault's default for new clients ("2.2").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#default_schema_version ScimClient#default_schema_version}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-vault.scimClient.ScimClient.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Controls how linked entities/groups/aliases are handled when this resource is destroyed.

`orphan_child_resources` detaches managed resources without deleting them; `delete_child_resources` deletes all managed resources along with the client. Leave unset for a plain delete (fails if the client still owns linked resources). Only consulted at destroy time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#deletion_policy ScimClient#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-vault.scimClient.ScimClient.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#id ScimClient#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `max_active_tokens`<sup>Optional</sup> <a name="max_active_tokens" id="@cdktn/provider-vault.scimClient.ScimClient.Initializer.parameter.maxActiveTokens"></a>

- *Type:* typing.Union[int, float]

Maximum number of active tokens for this SCIM client.

Must be a positive non-zero value. Leave unset to use Vault's default (2).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#max_active_tokens ScimClient#max_active_tokens}

---

##### `max_token_ttl`<sup>Optional</sup> <a name="max_token_ttl" id="@cdktn/provider-vault.scimClient.ScimClient.Initializer.parameter.maxTokenTtl"></a>

- *Type:* typing.Union[int, float]

Maximum TTL (in seconds) for tokens issued to this SCIM client. Zero means the cluster default is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#max_token_ttl ScimClient#max_token_ttl}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.scimClient.ScimClient.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#namespace ScimClient#namespace}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-vault.scimClient.ScimClient.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-vault.scimClient.ScimClientTimeouts">ScimClientTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#timeouts ScimClient#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.resetAliasMountAccessor">reset_alias_mount_accessor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.resetAllowedExtraAliasMountAccessors">reset_allowed_extra_alias_mount_accessors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.resetAllowGroupAdoption">reset_allow_group_adoption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.resetAllowUserAdoption">reset_allow_user_adoption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.resetDefaultSchemaVersion">reset_default_schema_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.resetMaxActiveTokens">reset_max_active_tokens</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.resetMaxTokenTtl">reset_max_token_ttl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-vault.scimClient.ScimClient.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.scimClient.ScimClient.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.scimClient.ScimClient.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-vault.scimClient.ScimClient.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.scimClient.ScimClient.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.scimClient.ScimClient.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-vault.scimClient.ScimClient.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-vault.scimClient.ScimClient.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-vault.scimClient.ScimClient.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-vault.scimClient.ScimClient.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-vault.scimClient.ScimClient.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-vault.scimClient.ScimClient.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-vault.scimClient.ScimClient.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-vault.scimClient.ScimClient.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-vault.scimClient.ScimClient.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.scimClient.ScimClient.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-vault.scimClient.ScimClient.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.scimClient.ScimClient.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-vault.scimClient.ScimClient.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.scimClient.ScimClient.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-vault.scimClient.ScimClient.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.scimClient.ScimClient.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-vault.scimClient.ScimClient.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.scimClient.ScimClient.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-vault.scimClient.ScimClient.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.scimClient.ScimClient.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-vault.scimClient.ScimClient.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.scimClient.ScimClient.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-vault.scimClient.ScimClient.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.scimClient.ScimClient.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-vault.scimClient.ScimClient.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.scimClient.ScimClient.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-vault.scimClient.ScimClient.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-vault.scimClient.ScimClient.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.scimClient.ScimClient.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.scimClient.ScimClient.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-vault.scimClient.ScimClient.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.scimClient.ScimClient.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-vault.scimClient.ScimClient.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.scimClient.ScimClient.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-vault.scimClient.ScimClient.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-vault.scimClient.ScimClient.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.scimClient.ScimClient.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-vault.scimClient.ScimClient.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.scimClient.ScimClient.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-vault.scimClient.ScimClient.putTimeouts"></a>

```python
def put_timeouts(
  delete: str = None
) -> None
```

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-vault.scimClient.ScimClient.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#delete ScimClient#delete}.

---

##### `reset_alias_mount_accessor` <a name="reset_alias_mount_accessor" id="@cdktn/provider-vault.scimClient.ScimClient.resetAliasMountAccessor"></a>

```python
def reset_alias_mount_accessor() -> None
```

##### `reset_allowed_extra_alias_mount_accessors` <a name="reset_allowed_extra_alias_mount_accessors" id="@cdktn/provider-vault.scimClient.ScimClient.resetAllowedExtraAliasMountAccessors"></a>

```python
def reset_allowed_extra_alias_mount_accessors() -> None
```

##### `reset_allow_group_adoption` <a name="reset_allow_group_adoption" id="@cdktn/provider-vault.scimClient.ScimClient.resetAllowGroupAdoption"></a>

```python
def reset_allow_group_adoption() -> None
```

##### `reset_allow_user_adoption` <a name="reset_allow_user_adoption" id="@cdktn/provider-vault.scimClient.ScimClient.resetAllowUserAdoption"></a>

```python
def reset_allow_user_adoption() -> None
```

##### `reset_default_schema_version` <a name="reset_default_schema_version" id="@cdktn/provider-vault.scimClient.ScimClient.resetDefaultSchemaVersion"></a>

```python
def reset_default_schema_version() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-vault.scimClient.ScimClient.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-vault.scimClient.ScimClient.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_max_active_tokens` <a name="reset_max_active_tokens" id="@cdktn/provider-vault.scimClient.ScimClient.resetMaxActiveTokens"></a>

```python
def reset_max_active_tokens() -> None
```

##### `reset_max_token_ttl` <a name="reset_max_token_ttl" id="@cdktn/provider-vault.scimClient.ScimClient.resetMaxTokenTtl"></a>

```python
def reset_max_token_ttl() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktn/provider-vault.scimClient.ScimClient.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-vault.scimClient.ScimClient.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ScimClient resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-vault.scimClient.ScimClient.isConstruct"></a>

```python
from cdktn_provider_vault import scim_client

scimClient.ScimClient.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.scimClient.ScimClient.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-vault.scimClient.ScimClient.isTerraformElement"></a>

```python
from cdktn_provider_vault import scim_client

scimClient.ScimClient.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.scimClient.ScimClient.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-vault.scimClient.ScimClient.isTerraformResource"></a>

```python
from cdktn_provider_vault import scim_client

scimClient.ScimClient.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.scimClient.ScimClient.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-vault.scimClient.ScimClient.generateConfigForImport"></a>

```python
from cdktn_provider_vault import scim_client

scimClient.ScimClient.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ScimClient resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.scimClient.ScimClient.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-vault.scimClient.ScimClient.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ScimClient to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-vault.scimClient.ScimClient.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ScimClient that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.scimClient.ScimClient.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ScimClient to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.deleting">deleting</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference">ScimClientTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.accessGrantPrincipalInput">access_grant_principal_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.aliasMountAccessorInput">alias_mount_accessor_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.allowedExtraAliasMountAccessorsInput">allowed_extra_alias_mount_accessors_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.allowGroupAdoptionInput">allow_group_adoption_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.allowUserAdoptionInput">allow_user_adoption_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.clientNameInput">client_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.defaultSchemaVersionInput">default_schema_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.maxActiveTokensInput">max_active_tokens_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.maxTokenTtlInput">max_token_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-vault.scimClient.ScimClientTimeouts">ScimClientTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.accessGrantPrincipal">access_grant_principal</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.aliasMountAccessor">alias_mount_accessor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.allowedExtraAliasMountAccessors">allowed_extra_alias_mount_accessors</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.allowGroupAdoption">allow_group_adoption</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.allowUserAdoption">allow_user_adoption</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.clientName">client_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.defaultSchemaVersion">default_schema_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.maxActiveTokens">max_active_tokens</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.maxTokenTtl">max_token_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.scimClient.ScimClient.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-vault.scimClient.ScimClient.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.scimClient.ScimClient.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-vault.scimClient.ScimClient.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-vault.scimClient.ScimClient.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-vault.scimClient.ScimClient.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-vault.scimClient.ScimClient.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.scimClient.ScimClient.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.scimClient.ScimClient.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.scimClient.ScimClient.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.scimClient.ScimClient.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.scimClient.ScimClient.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.scimClient.ScimClient.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.scimClient.ScimClient.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktn/provider-vault.scimClient.ScimClient.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `deleting`<sup>Required</sup> <a name="deleting" id="@cdktn/provider-vault.scimClient.ScimClient.property.deleting"></a>

```python
deleting: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-vault.scimClient.ScimClient.property.timeouts"></a>

```python
timeouts: ScimClientTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference">ScimClientTimeoutsOutputReference</a>

---

##### `access_grant_principal_input`<sup>Optional</sup> <a name="access_grant_principal_input" id="@cdktn/provider-vault.scimClient.ScimClient.property.accessGrantPrincipalInput"></a>

```python
access_grant_principal_input: str
```

- *Type:* str

---

##### `alias_mount_accessor_input`<sup>Optional</sup> <a name="alias_mount_accessor_input" id="@cdktn/provider-vault.scimClient.ScimClient.property.aliasMountAccessorInput"></a>

```python
alias_mount_accessor_input: str
```

- *Type:* str

---

##### `allowed_extra_alias_mount_accessors_input`<sup>Optional</sup> <a name="allowed_extra_alias_mount_accessors_input" id="@cdktn/provider-vault.scimClient.ScimClient.property.allowedExtraAliasMountAccessorsInput"></a>

```python
allowed_extra_alias_mount_accessors_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allow_group_adoption_input`<sup>Optional</sup> <a name="allow_group_adoption_input" id="@cdktn/provider-vault.scimClient.ScimClient.property.allowGroupAdoptionInput"></a>

```python
allow_group_adoption_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `allow_user_adoption_input`<sup>Optional</sup> <a name="allow_user_adoption_input" id="@cdktn/provider-vault.scimClient.ScimClient.property.allowUserAdoptionInput"></a>

```python
allow_user_adoption_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `client_name_input`<sup>Optional</sup> <a name="client_name_input" id="@cdktn/provider-vault.scimClient.ScimClient.property.clientNameInput"></a>

```python
client_name_input: str
```

- *Type:* str

---

##### `default_schema_version_input`<sup>Optional</sup> <a name="default_schema_version_input" id="@cdktn/provider-vault.scimClient.ScimClient.property.defaultSchemaVersionInput"></a>

```python
default_schema_version_input: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-vault.scimClient.ScimClient.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-vault.scimClient.ScimClient.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `max_active_tokens_input`<sup>Optional</sup> <a name="max_active_tokens_input" id="@cdktn/provider-vault.scimClient.ScimClient.property.maxActiveTokensInput"></a>

```python
max_active_tokens_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_token_ttl_input`<sup>Optional</sup> <a name="max_token_ttl_input" id="@cdktn/provider-vault.scimClient.ScimClient.property.maxTokenTtlInput"></a>

```python
max_token_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktn/provider-vault.scimClient.ScimClient.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-vault.scimClient.ScimClient.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | ScimClientTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-vault.scimClient.ScimClientTimeouts">ScimClientTimeouts</a>

---

##### `access_grant_principal`<sup>Required</sup> <a name="access_grant_principal" id="@cdktn/provider-vault.scimClient.ScimClient.property.accessGrantPrincipal"></a>

```python
access_grant_principal: str
```

- *Type:* str

---

##### `alias_mount_accessor`<sup>Required</sup> <a name="alias_mount_accessor" id="@cdktn/provider-vault.scimClient.ScimClient.property.aliasMountAccessor"></a>

```python
alias_mount_accessor: str
```

- *Type:* str

---

##### `allowed_extra_alias_mount_accessors`<sup>Required</sup> <a name="allowed_extra_alias_mount_accessors" id="@cdktn/provider-vault.scimClient.ScimClient.property.allowedExtraAliasMountAccessors"></a>

```python
allowed_extra_alias_mount_accessors: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allow_group_adoption`<sup>Required</sup> <a name="allow_group_adoption" id="@cdktn/provider-vault.scimClient.ScimClient.property.allowGroupAdoption"></a>

```python
allow_group_adoption: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `allow_user_adoption`<sup>Required</sup> <a name="allow_user_adoption" id="@cdktn/provider-vault.scimClient.ScimClient.property.allowUserAdoption"></a>

```python
allow_user_adoption: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `client_name`<sup>Required</sup> <a name="client_name" id="@cdktn/provider-vault.scimClient.ScimClient.property.clientName"></a>

```python
client_name: str
```

- *Type:* str

---

##### `default_schema_version`<sup>Required</sup> <a name="default_schema_version" id="@cdktn/provider-vault.scimClient.ScimClient.property.defaultSchemaVersion"></a>

```python
default_schema_version: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-vault.scimClient.ScimClient.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.scimClient.ScimClient.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `max_active_tokens`<sup>Required</sup> <a name="max_active_tokens" id="@cdktn/provider-vault.scimClient.ScimClient.property.maxActiveTokens"></a>

```python
max_active_tokens: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_token_ttl`<sup>Required</sup> <a name="max_token_ttl" id="@cdktn/provider-vault.scimClient.ScimClient.property.maxTokenTtl"></a>

```python
max_token_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.scimClient.ScimClient.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.scimClient.ScimClient.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ScimClientConfig <a name="ScimClientConfig" id="@cdktn/provider-vault.scimClient.ScimClientConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.scimClient.ScimClientConfig.Initializer"></a>

```python
from cdktn_provider_vault import scim_client

scimClient.ScimClientConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  access_grant_principal: str,
  client_name: str,
  alias_mount_accessor: str = None,
  allowed_extra_alias_mount_accessors: typing.List[str] = None,
  allow_group_adoption: bool | IResolvable = None,
  allow_user_adoption: bool | IResolvable = None,
  default_schema_version: str = None,
  deletion_policy: str = None,
  id: str = None,
  max_active_tokens: typing.Union[int, float] = None,
  max_token_ttl: typing.Union[int, float] = None,
  namespace: str = None,
  timeouts: ScimClientTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientConfig.property.accessGrantPrincipal">access_grant_principal</a></code> | <code>str</code> | Entity ID authorized to call SCIM protocol endpoints on behalf of this client. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientConfig.property.clientName">client_name</a></code> | <code>str</code> | The name of the SCIM client. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientConfig.property.aliasMountAccessor">alias_mount_accessor</a></code> | <code>str</code> | Auth mount accessor used to create entity aliases for SCIM users. Immutable after creation. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientConfig.property.allowedExtraAliasMountAccessors">allowed_extra_alias_mount_accessors</a></code> | <code>typing.List[str]</code> | Additional mount accessors whose aliases may be managed by this SCIM client. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientConfig.property.allowGroupAdoption">allow_group_adoption</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to allow adoption of existing Vault groups by SCIM-provisioned groups. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientConfig.property.allowUserAdoption">allow_user_adoption</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to allow adoption of existing Vault entities by SCIM users. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientConfig.property.defaultSchemaVersion">default_schema_version</a></code> | <code>str</code> | The Vault SCIM extension schema version used for this client. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Controls how linked entities/groups/aliases are handled when this resource is destroyed. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#id ScimClient#id}. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientConfig.property.maxActiveTokens">max_active_tokens</a></code> | <code>typing.Union[int, float]</code> | Maximum number of active tokens for this SCIM client. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientConfig.property.maxTokenTtl">max_token_ttl</a></code> | <code>typing.Union[int, float]</code> | Maximum TTL (in seconds) for tokens issued to this SCIM client. Zero means the cluster default is used. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeouts">ScimClientTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.scimClient.ScimClientConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.scimClient.ScimClientConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.scimClient.ScimClientConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.scimClient.ScimClientConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.scimClient.ScimClientConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.scimClient.ScimClientConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.scimClient.ScimClientConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `access_grant_principal`<sup>Required</sup> <a name="access_grant_principal" id="@cdktn/provider-vault.scimClient.ScimClientConfig.property.accessGrantPrincipal"></a>

```python
access_grant_principal: str
```

- *Type:* str

Entity ID authorized to call SCIM protocol endpoints on behalf of this client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#access_grant_principal ScimClient#access_grant_principal}

---

##### `client_name`<sup>Required</sup> <a name="client_name" id="@cdktn/provider-vault.scimClient.ScimClientConfig.property.clientName"></a>

```python
client_name: str
```

- *Type:* str

The name of the SCIM client.

Must be lowercase, because Vault lowercases client names when it stores them. May contain only letters, digits, '*', '-' and '.', and must start and end with a letter, digit or '*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#client_name ScimClient#client_name}

---

##### `alias_mount_accessor`<sup>Optional</sup> <a name="alias_mount_accessor" id="@cdktn/provider-vault.scimClient.ScimClientConfig.property.aliasMountAccessor"></a>

```python
alias_mount_accessor: str
```

- *Type:* str

Auth mount accessor used to create entity aliases for SCIM users. Immutable after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#alias_mount_accessor ScimClient#alias_mount_accessor}

---

##### `allowed_extra_alias_mount_accessors`<sup>Optional</sup> <a name="allowed_extra_alias_mount_accessors" id="@cdktn/provider-vault.scimClient.ScimClientConfig.property.allowedExtraAliasMountAccessors"></a>

```python
allowed_extra_alias_mount_accessors: typing.List[str]
```

- *Type:* typing.List[str]

Additional mount accessors whose aliases may be managed by this SCIM client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#allowed_extra_alias_mount_accessors ScimClient#allowed_extra_alias_mount_accessors}

---

##### `allow_group_adoption`<sup>Optional</sup> <a name="allow_group_adoption" id="@cdktn/provider-vault.scimClient.ScimClientConfig.property.allowGroupAdoption"></a>

```python
allow_group_adoption: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to allow adoption of existing Vault groups by SCIM-provisioned groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#allow_group_adoption ScimClient#allow_group_adoption}

---

##### `allow_user_adoption`<sup>Optional</sup> <a name="allow_user_adoption" id="@cdktn/provider-vault.scimClient.ScimClientConfig.property.allowUserAdoption"></a>

```python
allow_user_adoption: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to allow adoption of existing Vault entities by SCIM users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#allow_user_adoption ScimClient#allow_user_adoption}

---

##### `default_schema_version`<sup>Optional</sup> <a name="default_schema_version" id="@cdktn/provider-vault.scimClient.ScimClientConfig.property.defaultSchemaVersion"></a>

```python
default_schema_version: str
```

- *Type:* str

The Vault SCIM extension schema version used for this client.

Must be "2.0" or "2.2". Leave unset to use Vault's default for new clients ("2.2").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#default_schema_version ScimClient#default_schema_version}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-vault.scimClient.ScimClientConfig.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

Controls how linked entities/groups/aliases are handled when this resource is destroyed.

`orphan_child_resources` detaches managed resources without deleting them; `delete_child_resources` deletes all managed resources along with the client. Leave unset for a plain delete (fails if the client still owns linked resources). Only consulted at destroy time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#deletion_policy ScimClient#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-vault.scimClient.ScimClientConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#id ScimClient#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `max_active_tokens`<sup>Optional</sup> <a name="max_active_tokens" id="@cdktn/provider-vault.scimClient.ScimClientConfig.property.maxActiveTokens"></a>

```python
max_active_tokens: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of active tokens for this SCIM client.

Must be a positive non-zero value. Leave unset to use Vault's default (2).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#max_active_tokens ScimClient#max_active_tokens}

---

##### `max_token_ttl`<sup>Optional</sup> <a name="max_token_ttl" id="@cdktn/provider-vault.scimClient.ScimClientConfig.property.maxTokenTtl"></a>

```python
max_token_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum TTL (in seconds) for tokens issued to this SCIM client. Zero means the cluster default is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#max_token_ttl ScimClient#max_token_ttl}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.scimClient.ScimClientConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#namespace ScimClient#namespace}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-vault.scimClient.ScimClientConfig.property.timeouts"></a>

```python
timeouts: ScimClientTimeouts
```

- *Type:* <a href="#@cdktn/provider-vault.scimClient.ScimClientTimeouts">ScimClientTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#timeouts ScimClient#timeouts}

---

### ScimClientTimeouts <a name="ScimClientTimeouts" id="@cdktn/provider-vault.scimClient.ScimClientTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.scimClient.ScimClientTimeouts.Initializer"></a>

```python
from cdktn_provider_vault import scim_client

scimClient.ScimClientTimeouts(
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#delete ScimClient#delete}. |

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-vault.scimClient.ScimClientTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#delete ScimClient#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ScimClientTimeoutsOutputReference <a name="ScimClientTimeoutsOutputReference" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_vault import scim_client

scimClient.ScimClientTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-vault.scimClient.ScimClientTimeouts">ScimClientTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ScimClientTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-vault.scimClient.ScimClientTimeouts">ScimClientTimeouts</a>

---



