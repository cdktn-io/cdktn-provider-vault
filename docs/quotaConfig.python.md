# `quotaConfig` Submodule <a name="`quotaConfig` Submodule" id="@cdktn/provider-vault.quotaConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QuotaConfig <a name="QuotaConfig" id="@cdktn/provider-vault.quotaConfig.QuotaConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/quota_config vault_quota_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.Initializer"></a>

```python
from cdktn_provider_vault import quota_config

quotaConfig.QuotaConfig(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  absolute_rate_limit_exempt_paths: typing.List[str] = None,
  enable_rate_limit_audit_logging: bool | IResolvable = None,
  enable_rate_limit_response_headers: bool | IResolvable = None,
  namespace: str = None,
  rate_limit_exempt_paths: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.Initializer.parameter.absoluteRateLimitExemptPaths">absolute_rate_limit_exempt_paths</a></code> | <code>typing.List[str]</code> | Absolute paths exempt from all rate limit quotas, qualified from the root of the namespace hierarchy. |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.Initializer.parameter.enableRateLimitAuditLogging">enable_rate_limit_audit_logging</a></code> | <code>bool \| cdktn.IResolvable</code> | Enables audit logging for requests rejected by rate limit quotas. |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.Initializer.parameter.enableRateLimitResponseHeaders">enable_rate_limit_response_headers</a></code> | <code>bool \| cdktn.IResolvable</code> | Enables rate limit response headers on HTTP responses. |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.Initializer.parameter.rateLimitExemptPaths">rate_limit_exempt_paths</a></code> | <code>typing.List[str]</code> | Paths exempt from rate limit quotas relative to the current namespace context. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `absolute_rate_limit_exempt_paths`<sup>Optional</sup> <a name="absolute_rate_limit_exempt_paths" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.Initializer.parameter.absoluteRateLimitExemptPaths"></a>

- *Type:* typing.List[str]

Absolute paths exempt from all rate limit quotas, qualified from the root of the namespace hierarchy.

This field is effectively root-managed; administrative namespaces can read returned values but cannot reliably manage them. Order is not significant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/quota_config#absolute_rate_limit_exempt_paths QuotaConfig#absolute_rate_limit_exempt_paths}

---

##### `enable_rate_limit_audit_logging`<sup>Optional</sup> <a name="enable_rate_limit_audit_logging" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.Initializer.parameter.enableRateLimitAuditLogging"></a>

- *Type:* bool | cdktn.IResolvable

Enables audit logging for requests rejected by rate limit quotas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/quota_config#enable_rate_limit_audit_logging QuotaConfig#enable_rate_limit_audit_logging}

---

##### `enable_rate_limit_response_headers`<sup>Optional</sup> <a name="enable_rate_limit_response_headers" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.Initializer.parameter.enableRateLimitResponseHeaders"></a>

- *Type:* bool | cdktn.IResolvable

Enables rate limit response headers on HTTP responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/quota_config#enable_rate_limit_response_headers QuotaConfig#enable_rate_limit_response_headers}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/quota_config#namespace QuotaConfig#namespace}

---

##### `rate_limit_exempt_paths`<sup>Optional</sup> <a name="rate_limit_exempt_paths" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.Initializer.parameter.rateLimitExemptPaths"></a>

- *Type:* typing.List[str]

Paths exempt from rate limit quotas relative to the current namespace context.

This endpoint is only callable from the root or an administrative namespace, and exemption updates are effectively root-managed. Order is not significant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/quota_config#rate_limit_exempt_paths QuotaConfig#rate_limit_exempt_paths}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.resetAbsoluteRateLimitExemptPaths">reset_absolute_rate_limit_exempt_paths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.resetEnableRateLimitAuditLogging">reset_enable_rate_limit_audit_logging</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.resetEnableRateLimitResponseHeaders">reset_enable_rate_limit_response_headers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.resetRateLimitExemptPaths">reset_rate_limit_exempt_paths</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_absolute_rate_limit_exempt_paths` <a name="reset_absolute_rate_limit_exempt_paths" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.resetAbsoluteRateLimitExemptPaths"></a>

```python
def reset_absolute_rate_limit_exempt_paths() -> None
```

##### `reset_enable_rate_limit_audit_logging` <a name="reset_enable_rate_limit_audit_logging" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.resetEnableRateLimitAuditLogging"></a>

```python
def reset_enable_rate_limit_audit_logging() -> None
```

##### `reset_enable_rate_limit_response_headers` <a name="reset_enable_rate_limit_response_headers" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.resetEnableRateLimitResponseHeaders"></a>

```python
def reset_enable_rate_limit_response_headers() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_rate_limit_exempt_paths` <a name="reset_rate_limit_exempt_paths" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.resetRateLimitExemptPaths"></a>

```python
def reset_rate_limit_exempt_paths() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a QuotaConfig resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.isConstruct"></a>

```python
from cdktn_provider_vault import quota_config

quotaConfig.QuotaConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.isTerraformElement"></a>

```python
from cdktn_provider_vault import quota_config

quotaConfig.QuotaConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.isTerraformResource"></a>

```python
from cdktn_provider_vault import quota_config

quotaConfig.QuotaConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.generateConfigForImport"></a>

```python
from cdktn_provider_vault import quota_config

quotaConfig.QuotaConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a QuotaConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the QuotaConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing QuotaConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/quota_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the QuotaConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.absoluteRateLimitExemptPathsInput">absolute_rate_limit_exempt_paths_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.enableRateLimitAuditLoggingInput">enable_rate_limit_audit_logging_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.enableRateLimitResponseHeadersInput">enable_rate_limit_response_headers_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.rateLimitExemptPathsInput">rate_limit_exempt_paths_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.absoluteRateLimitExemptPaths">absolute_rate_limit_exempt_paths</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.enableRateLimitAuditLogging">enable_rate_limit_audit_logging</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.enableRateLimitResponseHeaders">enable_rate_limit_response_headers</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.rateLimitExemptPaths">rate_limit_exempt_paths</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `absolute_rate_limit_exempt_paths_input`<sup>Optional</sup> <a name="absolute_rate_limit_exempt_paths_input" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.absoluteRateLimitExemptPathsInput"></a>

```python
absolute_rate_limit_exempt_paths_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enable_rate_limit_audit_logging_input`<sup>Optional</sup> <a name="enable_rate_limit_audit_logging_input" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.enableRateLimitAuditLoggingInput"></a>

```python
enable_rate_limit_audit_logging_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_rate_limit_response_headers_input`<sup>Optional</sup> <a name="enable_rate_limit_response_headers_input" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.enableRateLimitResponseHeadersInput"></a>

```python
enable_rate_limit_response_headers_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `rate_limit_exempt_paths_input`<sup>Optional</sup> <a name="rate_limit_exempt_paths_input" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.rateLimitExemptPathsInput"></a>

```python
rate_limit_exempt_paths_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `absolute_rate_limit_exempt_paths`<sup>Required</sup> <a name="absolute_rate_limit_exempt_paths" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.absoluteRateLimitExemptPaths"></a>

```python
absolute_rate_limit_exempt_paths: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enable_rate_limit_audit_logging`<sup>Required</sup> <a name="enable_rate_limit_audit_logging" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.enableRateLimitAuditLogging"></a>

```python
enable_rate_limit_audit_logging: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_rate_limit_response_headers`<sup>Required</sup> <a name="enable_rate_limit_response_headers" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.enableRateLimitResponseHeaders"></a>

```python
enable_rate_limit_response_headers: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `rate_limit_exempt_paths`<sup>Required</sup> <a name="rate_limit_exempt_paths" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.rateLimitExemptPaths"></a>

```python
rate_limit_exempt_paths: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### QuotaConfigConfig <a name="QuotaConfigConfig" id="@cdktn/provider-vault.quotaConfig.QuotaConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.Initializer"></a>

```python
from cdktn_provider_vault import quota_config

quotaConfig.QuotaConfigConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  absolute_rate_limit_exempt_paths: typing.List[str] = None,
  enable_rate_limit_audit_logging: bool | IResolvable = None,
  enable_rate_limit_response_headers: bool | IResolvable = None,
  namespace: str = None,
  rate_limit_exempt_paths: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.absoluteRateLimitExemptPaths">absolute_rate_limit_exempt_paths</a></code> | <code>typing.List[str]</code> | Absolute paths exempt from all rate limit quotas, qualified from the root of the namespace hierarchy. |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.enableRateLimitAuditLogging">enable_rate_limit_audit_logging</a></code> | <code>bool \| cdktn.IResolvable</code> | Enables audit logging for requests rejected by rate limit quotas. |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.enableRateLimitResponseHeaders">enable_rate_limit_response_headers</a></code> | <code>bool \| cdktn.IResolvable</code> | Enables rate limit response headers on HTTP responses. |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.rateLimitExemptPaths">rate_limit_exempt_paths</a></code> | <code>typing.List[str]</code> | Paths exempt from rate limit quotas relative to the current namespace context. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `absolute_rate_limit_exempt_paths`<sup>Optional</sup> <a name="absolute_rate_limit_exempt_paths" id="@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.absoluteRateLimitExemptPaths"></a>

```python
absolute_rate_limit_exempt_paths: typing.List[str]
```

- *Type:* typing.List[str]

Absolute paths exempt from all rate limit quotas, qualified from the root of the namespace hierarchy.

This field is effectively root-managed; administrative namespaces can read returned values but cannot reliably manage them. Order is not significant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/quota_config#absolute_rate_limit_exempt_paths QuotaConfig#absolute_rate_limit_exempt_paths}

---

##### `enable_rate_limit_audit_logging`<sup>Optional</sup> <a name="enable_rate_limit_audit_logging" id="@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.enableRateLimitAuditLogging"></a>

```python
enable_rate_limit_audit_logging: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Enables audit logging for requests rejected by rate limit quotas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/quota_config#enable_rate_limit_audit_logging QuotaConfig#enable_rate_limit_audit_logging}

---

##### `enable_rate_limit_response_headers`<sup>Optional</sup> <a name="enable_rate_limit_response_headers" id="@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.enableRateLimitResponseHeaders"></a>

```python
enable_rate_limit_response_headers: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Enables rate limit response headers on HTTP responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/quota_config#enable_rate_limit_response_headers QuotaConfig#enable_rate_limit_response_headers}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/quota_config#namespace QuotaConfig#namespace}

---

##### `rate_limit_exempt_paths`<sup>Optional</sup> <a name="rate_limit_exempt_paths" id="@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.rateLimitExemptPaths"></a>

```python
rate_limit_exempt_paths: typing.List[str]
```

- *Type:* typing.List[str]

Paths exempt from rate limit quotas relative to the current namespace context.

This endpoint is only callable from the root or an administrative namespace, and exemption updates are effectively root-managed. Order is not significant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/quota_config#rate_limit_exempt_paths QuotaConfig#rate_limit_exempt_paths}

---



