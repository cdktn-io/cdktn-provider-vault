# `agentRegistration` Submodule <a name="`agentRegistration` Submodule" id="@cdktn/provider-vault.agentRegistration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AgentRegistration <a name="AgentRegistration" id="@cdktn/provider-vault.agentRegistration.AgentRegistration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/agent_registration vault_agent_registration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.Initializer"></a>

```python
from cdktn_provider_vault import agent_registration

agentRegistration.AgentRegistration(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  display_name: str,
  entity_id: str,
  ceiling_policies: typing.List[str] = None,
  description: str = None,
  namespace: str = None,
  no_default_ceiling_policy: bool | IResolvable = None,
  optional_authorization_details: bool | IResolvable = None,
  owner: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Human-readable name for the agent registration. |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.Initializer.parameter.entityId">entity_id</a></code> | <code>str</code> | Entity ID representing this agent. Each entity can only have one registration. |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.Initializer.parameter.ceilingPolicies">ceiling_policies</a></code> | <code>typing.List[str]</code> | List of policy identifiers that define the authorization ceiling for this agent. |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.Initializer.parameter.description">description</a></code> | <code>str</code> | Detailed description of the agent's purpose. |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.Initializer.parameter.noDefaultCeilingPolicy">no_default_ceiling_policy</a></code> | <code>bool \| cdktn.IResolvable</code> | If true, opts out of automatically adding the default-ceiling policy to this agent registration. |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.Initializer.parameter.optionalAuthorizationDetails">optional_authorization_details</a></code> | <code>bool \| cdktn.IResolvable</code> | When false, RAR (Rich Authorization Requests) is mandatory and authorization_details must be present in the token. |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.Initializer.parameter.owner">owner</a></code> | <code>str</code> | Owner of the agent registration. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.Initializer.parameter.displayName"></a>

- *Type:* str

Human-readable name for the agent registration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/agent_registration#display_name AgentRegistration#display_name}

---

##### `entity_id`<sup>Required</sup> <a name="entity_id" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.Initializer.parameter.entityId"></a>

- *Type:* str

Entity ID representing this agent. Each entity can only have one registration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/agent_registration#entity_id AgentRegistration#entity_id}

---

##### `ceiling_policies`<sup>Optional</sup> <a name="ceiling_policies" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.Initializer.parameter.ceilingPolicies"></a>

- *Type:* typing.List[str]

List of policy identifiers that define the authorization ceiling for this agent.

Cannot include 'root' policy. Note: Vault automatically adds default policies (['default', 'default-ceiling']) unless no_default_ceiling_policy is true, but these are filtered out when reading the state to match your configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/agent_registration#ceiling_policies AgentRegistration#ceiling_policies}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.Initializer.parameter.description"></a>

- *Type:* str

Detailed description of the agent's purpose.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/agent_registration#description AgentRegistration#description}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/agent_registration#namespace AgentRegistration#namespace}

---

##### `no_default_ceiling_policy`<sup>Optional</sup> <a name="no_default_ceiling_policy" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.Initializer.parameter.noDefaultCeilingPolicy"></a>

- *Type:* bool | cdktn.IResolvable

If true, opts out of automatically adding the default-ceiling policy to this agent registration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/agent_registration#no_default_ceiling_policy AgentRegistration#no_default_ceiling_policy}

---

##### `optional_authorization_details`<sup>Optional</sup> <a name="optional_authorization_details" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.Initializer.parameter.optionalAuthorizationDetails"></a>

- *Type:* bool | cdktn.IResolvable

When false, RAR (Rich Authorization Requests) is mandatory and authorization_details must be present in the token.

When set to true, authorization_details in the JWT token are optional for this agent. This setting works in conjunction with the OAuth Resource Server profile's optional_authorization_details setting - RAR is optional if EITHER is true. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/agent_registration#optional_authorization_details AgentRegistration#optional_authorization_details}

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.Initializer.parameter.owner"></a>

- *Type:* str

Owner of the agent registration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/agent_registration#owner AgentRegistration#owner}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.resetCeilingPolicies">reset_ceiling_policies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.resetNoDefaultCeilingPolicy">reset_no_default_ceiling_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.resetOptionalAuthorizationDetails">reset_optional_authorization_details</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.resetOwner">reset_owner</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_ceiling_policies` <a name="reset_ceiling_policies" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.resetCeilingPolicies"></a>

```python
def reset_ceiling_policies() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_no_default_ceiling_policy` <a name="reset_no_default_ceiling_policy" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.resetNoDefaultCeilingPolicy"></a>

```python
def reset_no_default_ceiling_policy() -> None
```

##### `reset_optional_authorization_details` <a name="reset_optional_authorization_details" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.resetOptionalAuthorizationDetails"></a>

```python
def reset_optional_authorization_details() -> None
```

##### `reset_owner` <a name="reset_owner" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.resetOwner"></a>

```python
def reset_owner() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a AgentRegistration resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.isConstruct"></a>

```python
from cdktn_provider_vault import agent_registration

agentRegistration.AgentRegistration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.isTerraformElement"></a>

```python
from cdktn_provider_vault import agent_registration

agentRegistration.AgentRegistration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.isTerraformResource"></a>

```python
from cdktn_provider_vault import agent_registration

agentRegistration.AgentRegistration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.generateConfigForImport"></a>

```python
from cdktn_provider_vault import agent_registration

agentRegistration.AgentRegistration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a AgentRegistration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AgentRegistration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AgentRegistration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/agent_registration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AgentRegistration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.lastUpdatedTime">last_updated_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.ceilingPoliciesInput">ceiling_policies_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.entityIdInput">entity_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.noDefaultCeilingPolicyInput">no_default_ceiling_policy_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.optionalAuthorizationDetailsInput">optional_authorization_details_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.ownerInput">owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.ceilingPolicies">ceiling_policies</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.entityId">entity_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.noDefaultCeilingPolicy">no_default_ceiling_policy</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.optionalAuthorizationDetails">optional_authorization_details</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.owner">owner</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_updated_time`<sup>Required</sup> <a name="last_updated_time" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.lastUpdatedTime"></a>

```python
last_updated_time: str
```

- *Type:* str

---

##### `ceiling_policies_input`<sup>Optional</sup> <a name="ceiling_policies_input" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.ceilingPoliciesInput"></a>

```python
ceiling_policies_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `entity_id_input`<sup>Optional</sup> <a name="entity_id_input" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.entityIdInput"></a>

```python
entity_id_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `no_default_ceiling_policy_input`<sup>Optional</sup> <a name="no_default_ceiling_policy_input" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.noDefaultCeilingPolicyInput"></a>

```python
no_default_ceiling_policy_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `optional_authorization_details_input`<sup>Optional</sup> <a name="optional_authorization_details_input" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.optionalAuthorizationDetailsInput"></a>

```python
optional_authorization_details_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `owner_input`<sup>Optional</sup> <a name="owner_input" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.ownerInput"></a>

```python
owner_input: str
```

- *Type:* str

---

##### `ceiling_policies`<sup>Required</sup> <a name="ceiling_policies" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.ceilingPolicies"></a>

```python
ceiling_policies: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `entity_id`<sup>Required</sup> <a name="entity_id" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.entityId"></a>

```python
entity_id: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `no_default_ceiling_policy`<sup>Required</sup> <a name="no_default_ceiling_policy" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.noDefaultCeilingPolicy"></a>

```python
no_default_ceiling_policy: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `optional_authorization_details`<sup>Required</sup> <a name="optional_authorization_details" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.optionalAuthorizationDetails"></a>

```python
optional_authorization_details: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AgentRegistrationConfig <a name="AgentRegistrationConfig" id="@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.Initializer"></a>

```python
from cdktn_provider_vault import agent_registration

agentRegistration.AgentRegistrationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  display_name: str,
  entity_id: str,
  ceiling_policies: typing.List[str] = None,
  description: str = None,
  namespace: str = None,
  no_default_ceiling_policy: bool | IResolvable = None,
  optional_authorization_details: bool | IResolvable = None,
  owner: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.displayName">display_name</a></code> | <code>str</code> | Human-readable name for the agent registration. |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.entityId">entity_id</a></code> | <code>str</code> | Entity ID representing this agent. Each entity can only have one registration. |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.ceilingPolicies">ceiling_policies</a></code> | <code>typing.List[str]</code> | List of policy identifiers that define the authorization ceiling for this agent. |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.description">description</a></code> | <code>str</code> | Detailed description of the agent's purpose. |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.noDefaultCeilingPolicy">no_default_ceiling_policy</a></code> | <code>bool \| cdktn.IResolvable</code> | If true, opts out of automatically adding the default-ceiling policy to this agent registration. |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.optionalAuthorizationDetails">optional_authorization_details</a></code> | <code>bool \| cdktn.IResolvable</code> | When false, RAR (Rich Authorization Requests) is mandatory and authorization_details must be present in the token. |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.owner">owner</a></code> | <code>str</code> | Owner of the agent registration. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Human-readable name for the agent registration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/agent_registration#display_name AgentRegistration#display_name}

---

##### `entity_id`<sup>Required</sup> <a name="entity_id" id="@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.entityId"></a>

```python
entity_id: str
```

- *Type:* str

Entity ID representing this agent. Each entity can only have one registration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/agent_registration#entity_id AgentRegistration#entity_id}

---

##### `ceiling_policies`<sup>Optional</sup> <a name="ceiling_policies" id="@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.ceilingPolicies"></a>

```python
ceiling_policies: typing.List[str]
```

- *Type:* typing.List[str]

List of policy identifiers that define the authorization ceiling for this agent.

Cannot include 'root' policy. Note: Vault automatically adds default policies (['default', 'default-ceiling']) unless no_default_ceiling_policy is true, but these are filtered out when reading the state to match your configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/agent_registration#ceiling_policies AgentRegistration#ceiling_policies}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Detailed description of the agent's purpose.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/agent_registration#description AgentRegistration#description}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/agent_registration#namespace AgentRegistration#namespace}

---

##### `no_default_ceiling_policy`<sup>Optional</sup> <a name="no_default_ceiling_policy" id="@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.noDefaultCeilingPolicy"></a>

```python
no_default_ceiling_policy: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If true, opts out of automatically adding the default-ceiling policy to this agent registration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/agent_registration#no_default_ceiling_policy AgentRegistration#no_default_ceiling_policy}

---

##### `optional_authorization_details`<sup>Optional</sup> <a name="optional_authorization_details" id="@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.optionalAuthorizationDetails"></a>

```python
optional_authorization_details: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

When false, RAR (Rich Authorization Requests) is mandatory and authorization_details must be present in the token.

When set to true, authorization_details in the JWT token are optional for this agent. This setting works in conjunction with the OAuth Resource Server profile's optional_authorization_details setting - RAR is optional if EITHER is true. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/agent_registration#optional_authorization_details AgentRegistration#optional_authorization_details}

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.owner"></a>

```python
owner: str
```

- *Type:* str

Owner of the agent registration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/agent_registration#owner AgentRegistration#owner}

---



