# `ephemeralVaultGenericEndpoint` Submodule <a name="`ephemeralVaultGenericEndpoint` Submodule" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralVaultGenericEndpoint <a name="EphemeralVaultGenericEndpoint" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/generic_endpoint vault_generic_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.Initializer"></a>

```python
from cdktn_provider_vault import ephemeral_vault_generic_endpoint

ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint(
  scope: Construct,
  id: str,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformEphemeralResourceLifecycle = None,
  provider: TerraformProvider = None,
  data_json: str,
  path: str,
  mount_id: str = None,
  namespace: str = None,
  path_wrap_ttl: str = None,
  write_fields: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.Initializer.parameter.dataJson">data_json</a></code> | <code>str</code> | JSON-encoded data to write. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.Initializer.parameter.path">path</a></code> | <code>str</code> | Full path to the Vault endpoint that will be written. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.Initializer.parameter.mountId">mount_id</a></code> | <code>str</code> | Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.Initializer.parameter.pathWrapTtl">path_wrap_ttl</a></code> | <code>str</code> | The TTL for the wrapped response. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.Initializer.parameter.writeFields">write_fields</a></code> | <code>typing.List[str]</code> | Top-level fields returned by the write operation to extract and expose via write_data/write_data_json. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `data_json`<sup>Required</sup> <a name="data_json" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.Initializer.parameter.dataJson"></a>

- *Type:* str

JSON-encoded data to write.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/generic_endpoint#data_json EphemeralVaultGenericEndpoint#data_json}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.Initializer.parameter.path"></a>

- *Type:* str

Full path to the Vault endpoint that will be written.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/generic_endpoint#path EphemeralVaultGenericEndpoint#path}

---

##### `mount_id`<sup>Optional</sup> <a name="mount_id" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.Initializer.parameter.mountId"></a>

- *Type:* str

Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/generic_endpoint#mount_id EphemeralVaultGenericEndpoint#mount_id}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/generic_endpoint#namespace EphemeralVaultGenericEndpoint#namespace}

---

##### `path_wrap_ttl`<sup>Optional</sup> <a name="path_wrap_ttl" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.Initializer.parameter.pathWrapTtl"></a>

- *Type:* str

The TTL for the wrapped response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/generic_endpoint#path_wrap_ttl EphemeralVaultGenericEndpoint#path_wrap_ttl}

---

##### `write_fields`<sup>Optional</sup> <a name="write_fields" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.Initializer.parameter.writeFields"></a>

- *Type:* typing.List[str]

Top-level fields returned by the write operation to extract and expose via write_data/write_data_json.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/generic_endpoint#write_fields EphemeralVaultGenericEndpoint#write_fields}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.toTerraform">to_terraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.resetMountId">reset_mount_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.resetPathWrapTtl">reset_path_wrap_ttl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.resetWriteFields">reset_write_fields</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this ephemeral resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_mount_id` <a name="reset_mount_id" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.resetMountId"></a>

```python
def reset_mount_id() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_path_wrap_ttl` <a name="reset_path_wrap_ttl" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.resetPathWrapTtl"></a>

```python
def reset_path_wrap_ttl() -> None
```

##### `reset_write_fields` <a name="reset_write_fields" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.resetWriteFields"></a>

```python
def reset_write_fields() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.isTerraformEphemeralResource">is_terraform_ephemeral_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.isConstruct"></a>

```python
from cdktn_provider_vault import ephemeral_vault_generic_endpoint

ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.isTerraformElement"></a>

```python
from cdktn_provider_vault import ephemeral_vault_generic_endpoint

ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_ephemeral_resource` <a name="is_terraform_ephemeral_resource" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.isTerraformEphemeralResource"></a>

```python
from cdktn_provider_vault import ephemeral_vault_generic_endpoint

ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.is_terraform_ephemeral_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.writeData">write_data</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.writeDataJson">write_data_json</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.dataJsonInput">data_json_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.mountIdInput">mount_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.pathWrapTtlInput">path_wrap_ttl_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.writeFieldsInput">write_fields_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.dataJson">data_json</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.mountId">mount_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.pathWrapTtl">path_wrap_ttl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.writeFields">write_fields</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.lifecycle"></a>

```python
lifecycle: TerraformEphemeralResourceLifecycle
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `write_data`<sup>Required</sup> <a name="write_data" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.writeData"></a>

```python
write_data: StringMap
```

- *Type:* cdktn.StringMap

---

##### `write_data_json`<sup>Required</sup> <a name="write_data_json" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.writeDataJson"></a>

```python
write_data_json: str
```

- *Type:* str

---

##### `data_json_input`<sup>Optional</sup> <a name="data_json_input" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.dataJsonInput"></a>

```python
data_json_input: str
```

- *Type:* str

---

##### `mount_id_input`<sup>Optional</sup> <a name="mount_id_input" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.mountIdInput"></a>

```python
mount_id_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `path_wrap_ttl_input`<sup>Optional</sup> <a name="path_wrap_ttl_input" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.pathWrapTtlInput"></a>

```python
path_wrap_ttl_input: str
```

- *Type:* str

---

##### `write_fields_input`<sup>Optional</sup> <a name="write_fields_input" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.writeFieldsInput"></a>

```python
write_fields_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `data_json`<sup>Required</sup> <a name="data_json" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.dataJson"></a>

```python
data_json: str
```

- *Type:* str

---

##### `mount_id`<sup>Required</sup> <a name="mount_id" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.mountId"></a>

```python
mount_id: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `path_wrap_ttl`<sup>Required</sup> <a name="path_wrap_ttl" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.pathWrapTtl"></a>

```python
path_wrap_ttl: str
```

- *Type:* str

---

##### `write_fields`<sup>Required</sup> <a name="write_fields" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.writeFields"></a>

```python
write_fields: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralVaultGenericEndpointConfig <a name="EphemeralVaultGenericEndpointConfig" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.Initializer"></a>

```python
from cdktn_provider_vault import ephemeral_vault_generic_endpoint

ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig(
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformEphemeralResourceLifecycle = None,
  provider: TerraformProvider = None,
  data_json: str,
  path: str,
  mount_id: str = None,
  namespace: str = None,
  path_wrap_ttl: str = None,
  write_fields: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.dataJson">data_json</a></code> | <code>str</code> | JSON-encoded data to write. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.path">path</a></code> | <code>str</code> | Full path to the Vault endpoint that will be written. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.mountId">mount_id</a></code> | <code>str</code> | Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.pathWrapTtl">path_wrap_ttl</a></code> | <code>str</code> | The TTL for the wrapped response. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.writeFields">write_fields</a></code> | <code>typing.List[str]</code> | Top-level fields returned by the write operation to extract and expose via write_data/write_data_json. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.lifecycle"></a>

```python
lifecycle: TerraformEphemeralResourceLifecycle
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `data_json`<sup>Required</sup> <a name="data_json" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.dataJson"></a>

```python
data_json: str
```

- *Type:* str

JSON-encoded data to write.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/generic_endpoint#data_json EphemeralVaultGenericEndpoint#data_json}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.path"></a>

```python
path: str
```

- *Type:* str

Full path to the Vault endpoint that will be written.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/generic_endpoint#path EphemeralVaultGenericEndpoint#path}

---

##### `mount_id`<sup>Optional</sup> <a name="mount_id" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.mountId"></a>

```python
mount_id: str
```

- *Type:* str

Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/generic_endpoint#mount_id EphemeralVaultGenericEndpoint#mount_id}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/generic_endpoint#namespace EphemeralVaultGenericEndpoint#namespace}

---

##### `path_wrap_ttl`<sup>Optional</sup> <a name="path_wrap_ttl" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.pathWrapTtl"></a>

```python
path_wrap_ttl: str
```

- *Type:* str

The TTL for the wrapped response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/generic_endpoint#path_wrap_ttl EphemeralVaultGenericEndpoint#path_wrap_ttl}

---

##### `write_fields`<sup>Optional</sup> <a name="write_fields" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.writeFields"></a>

```python
write_fields: typing.List[str]
```

- *Type:* typing.List[str]

Top-level fields returned by the write operation to extract and expose via write_data/write_data_json.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/generic_endpoint#write_fields EphemeralVaultGenericEndpoint#write_fields}

---



