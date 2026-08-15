# `ephemeralVaultAzureStaticCredentials` Submodule <a name="`ephemeralVaultAzureStaticCredentials` Submodule" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralVaultAzureStaticCredentials <a name="EphemeralVaultAzureStaticCredentials" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/azure_static_credentials vault_azure_static_credentials}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.Initializer"></a>

```python
from cdktn_provider_vault import ephemeral_vault_azure_static_credentials

ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials(
  scope: Construct,
  id: str,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformEphemeralResourceLifecycle = None,
  provider: TerraformProvider = None,
  backend: str,
  role: str,
  mount_id: str = None,
  namespace: str = None,
  request_metadata: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.Initializer.parameter.backend">backend</a></code> | <code>str</code> | Azure Secret Backend to read credentials from. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.Initializer.parameter.role">role</a></code> | <code>str</code> | Static role name to fetch credentials for. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.Initializer.parameter.mountId">mount_id</a></code> | <code>str</code> | Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.Initializer.parameter.requestMetadata">request_metadata</a></code> | <code>typing.Mapping[str]</code> | Input metadata to send with the request to Vault. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.Initializer.parameter.backend"></a>

- *Type:* str

Azure Secret Backend to read credentials from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/azure_static_credentials#backend EphemeralVaultAzureStaticCredentials#backend}

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.Initializer.parameter.role"></a>

- *Type:* str

Static role name to fetch credentials for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/azure_static_credentials#role EphemeralVaultAzureStaticCredentials#role}

---

##### `mount_id`<sup>Optional</sup> <a name="mount_id" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.Initializer.parameter.mountId"></a>

- *Type:* str

Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/azure_static_credentials#mount_id EphemeralVaultAzureStaticCredentials#mount_id}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/azure_static_credentials#namespace EphemeralVaultAzureStaticCredentials#namespace}

---

##### `request_metadata`<sup>Optional</sup> <a name="request_metadata" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.Initializer.parameter.requestMetadata"></a>

- *Type:* typing.Mapping[str]

Input metadata to send with the request to Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/azure_static_credentials#request_metadata EphemeralVaultAzureStaticCredentials#request_metadata}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.toTerraform">to_terraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.resetMountId">reset_mount_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.resetRequestMetadata">reset_request_metadata</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this ephemeral resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_mount_id` <a name="reset_mount_id" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.resetMountId"></a>

```python
def reset_mount_id() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_request_metadata` <a name="reset_request_metadata" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.resetRequestMetadata"></a>

```python
def reset_request_metadata() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.isTerraformEphemeralResource">is_terraform_ephemeral_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.isConstruct"></a>

```python
from cdktn_provider_vault import ephemeral_vault_azure_static_credentials

ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.isTerraformElement"></a>

```python
from cdktn_provider_vault import ephemeral_vault_azure_static_credentials

ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_ephemeral_resource` <a name="is_terraform_ephemeral_resource" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.isTerraformEphemeralResource"></a>

```python
from cdktn_provider_vault import ephemeral_vault_azure_static_credentials

ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.is_terraform_ephemeral_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.expiration">expiration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.metadata">metadata</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.secretId">secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.backendInput">backend_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.mountIdInput">mount_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.requestMetadataInput">request_metadata_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.backend">backend</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.mountId">mount_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.requestMetadata">request_metadata</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.role">role</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.lifecycle"></a>

```python
lifecycle: TerraformEphemeralResourceLifecycle
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `expiration`<sup>Required</sup> <a name="expiration" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.expiration"></a>

```python
expiration: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.metadata"></a>

```python
metadata: StringMap
```

- *Type:* cdktn.StringMap

---

##### `secret_id`<sup>Required</sup> <a name="secret_id" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.secretId"></a>

```python
secret_id: str
```

- *Type:* str

---

##### `backend_input`<sup>Optional</sup> <a name="backend_input" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.backendInput"></a>

```python
backend_input: str
```

- *Type:* str

---

##### `mount_id_input`<sup>Optional</sup> <a name="mount_id_input" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.mountIdInput"></a>

```python
mount_id_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `request_metadata_input`<sup>Optional</sup> <a name="request_metadata_input" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.requestMetadataInput"></a>

```python
request_metadata_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.backend"></a>

```python
backend: str
```

- *Type:* str

---

##### `mount_id`<sup>Required</sup> <a name="mount_id" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.mountId"></a>

```python
mount_id: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `request_metadata`<sup>Required</sup> <a name="request_metadata" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.requestMetadata"></a>

```python
request_metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.role"></a>

```python
role: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralVaultAzureStaticCredentialsConfig <a name="EphemeralVaultAzureStaticCredentialsConfig" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentialsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentialsConfig.Initializer"></a>

```python
from cdktn_provider_vault import ephemeral_vault_azure_static_credentials

ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentialsConfig(
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformEphemeralResourceLifecycle = None,
  provider: TerraformProvider = None,
  backend: str,
  role: str,
  mount_id: str = None,
  namespace: str = None,
  request_metadata: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentialsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentialsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentialsConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentialsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentialsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentialsConfig.property.backend">backend</a></code> | <code>str</code> | Azure Secret Backend to read credentials from. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentialsConfig.property.role">role</a></code> | <code>str</code> | Static role name to fetch credentials for. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentialsConfig.property.mountId">mount_id</a></code> | <code>str</code> | Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentialsConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentialsConfig.property.requestMetadata">request_metadata</a></code> | <code>typing.Mapping[str]</code> | Input metadata to send with the request to Vault. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentialsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentialsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentialsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentialsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformEphemeralResourceLifecycle
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentialsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentialsConfig.property.backend"></a>

```python
backend: str
```

- *Type:* str

Azure Secret Backend to read credentials from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/azure_static_credentials#backend EphemeralVaultAzureStaticCredentials#backend}

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentialsConfig.property.role"></a>

```python
role: str
```

- *Type:* str

Static role name to fetch credentials for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/azure_static_credentials#role EphemeralVaultAzureStaticCredentials#role}

---

##### `mount_id`<sup>Optional</sup> <a name="mount_id" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentialsConfig.property.mountId"></a>

```python
mount_id: str
```

- *Type:* str

Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/azure_static_credentials#mount_id EphemeralVaultAzureStaticCredentials#mount_id}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentialsConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/azure_static_credentials#namespace EphemeralVaultAzureStaticCredentials#namespace}

---

##### `request_metadata`<sup>Optional</sup> <a name="request_metadata" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentialsConfig.property.requestMetadata"></a>

```python
request_metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Input metadata to send with the request to Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/azure_static_credentials#request_metadata EphemeralVaultAzureStaticCredentials#request_metadata}

---



