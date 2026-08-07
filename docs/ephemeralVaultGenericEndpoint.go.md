# `ephemeralVaultGenericEndpoint` Submodule <a name="`ephemeralVaultGenericEndpoint` Submodule" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralVaultGenericEndpoint <a name="EphemeralVaultGenericEndpoint" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/generic_endpoint vault_generic_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v17/ephemeralvaultgenericendpoint"

ephemeralvaultgenericendpoint.NewEphemeralVaultGenericEndpoint(scope Construct, id *string, config EphemeralVaultGenericEndpointConfig) EphemeralVaultGenericEndpoint
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig">EphemeralVaultGenericEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig">EphemeralVaultGenericEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.toTerraform">ToTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.resetMountId">ResetMountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.resetPathWrapTtl">ResetPathWrapTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.resetWriteFields">ResetWriteFields</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this ephemeral resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetMountId` <a name="ResetMountId" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.resetMountId"></a>

```go
func ResetMountId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetPathWrapTtl` <a name="ResetPathWrapTtl" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.resetPathWrapTtl"></a>

```go
func ResetPathWrapTtl()
```

##### `ResetWriteFields` <a name="ResetWriteFields" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.resetWriteFields"></a>

```go
func ResetWriteFields()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.isTerraformEphemeralResource">IsTerraformEphemeralResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v17/ephemeralvaultgenericendpoint"

ephemeralvaultgenericendpoint.EphemeralVaultGenericEndpoint_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v17/ephemeralvaultgenericendpoint"

ephemeralvaultgenericendpoint.EphemeralVaultGenericEndpoint_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformEphemeralResource` <a name="IsTerraformEphemeralResource" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.isTerraformEphemeralResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v17/ephemeralvaultgenericendpoint"

ephemeralvaultgenericendpoint.EphemeralVaultGenericEndpoint_IsTerraformEphemeralResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.writeData">WriteData</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.writeDataJson">WriteDataJson</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.dataJsonInput">DataJsonInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.mountIdInput">MountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.pathWrapTtlInput">PathWrapTtlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.writeFieldsInput">WriteFieldsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.dataJson">DataJson</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.mountId">MountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.pathWrapTtl">PathWrapTtl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.writeFields">WriteFields</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.lifecycle"></a>

```go
func Lifecycle() TerraformEphemeralResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `WriteData`<sup>Required</sup> <a name="WriteData" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.writeData"></a>

```go
func WriteData() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `WriteDataJson`<sup>Required</sup> <a name="WriteDataJson" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.writeDataJson"></a>

```go
func WriteDataJson() *string
```

- *Type:* *string

---

##### `DataJsonInput`<sup>Optional</sup> <a name="DataJsonInput" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.dataJsonInput"></a>

```go
func DataJsonInput() *string
```

- *Type:* *string

---

##### `MountIdInput`<sup>Optional</sup> <a name="MountIdInput" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.mountIdInput"></a>

```go
func MountIdInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `PathWrapTtlInput`<sup>Optional</sup> <a name="PathWrapTtlInput" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.pathWrapTtlInput"></a>

```go
func PathWrapTtlInput() *string
```

- *Type:* *string

---

##### `WriteFieldsInput`<sup>Optional</sup> <a name="WriteFieldsInput" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.writeFieldsInput"></a>

```go
func WriteFieldsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DataJson`<sup>Required</sup> <a name="DataJson" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.dataJson"></a>

```go
func DataJson() *string
```

- *Type:* *string

---

##### `MountId`<sup>Required</sup> <a name="MountId" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.mountId"></a>

```go
func MountId() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `PathWrapTtl`<sup>Required</sup> <a name="PathWrapTtl" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.pathWrapTtl"></a>

```go
func PathWrapTtl() *string
```

- *Type:* *string

---

##### `WriteFields`<sup>Required</sup> <a name="WriteFields" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.writeFields"></a>

```go
func WriteFields() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralVaultGenericEndpointConfig <a name="EphemeralVaultGenericEndpointConfig" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v17/ephemeralvaultgenericendpoint"

&ephemeralvaultgenericendpoint.EphemeralVaultGenericEndpointConfig {
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	DataJson: *string,
	Path: *string,
	MountId: *string,
	Namespace: *string,
	PathWrapTtl: *string,
	WriteFields: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.dataJson">DataJson</a></code> | <code>*string</code> | JSON-encoded data to write. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.path">Path</a></code> | <code>*string</code> | Full path to the Vault endpoint that will be written. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.mountId">MountId</a></code> | <code>*string</code> | Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.pathWrapTtl">PathWrapTtl</a></code> | <code>*string</code> | The TTL for the wrapped response. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.writeFields">WriteFields</a></code> | <code>*[]*string</code> | Top-level fields returned by the write operation to extract and expose via write_data/write_data_json. |

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.lifecycle"></a>

```go
Lifecycle TerraformEphemeralResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `DataJson`<sup>Required</sup> <a name="DataJson" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.dataJson"></a>

```go
DataJson *string
```

- *Type:* *string

JSON-encoded data to write.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/generic_endpoint#data_json EphemeralVaultGenericEndpoint#data_json}

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.path"></a>

```go
Path *string
```

- *Type:* *string

Full path to the Vault endpoint that will be written.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/generic_endpoint#path EphemeralVaultGenericEndpoint#path}

---

##### `MountId`<sup>Optional</sup> <a name="MountId" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.mountId"></a>

```go
MountId *string
```

- *Type:* *string

Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/generic_endpoint#mount_id EphemeralVaultGenericEndpoint#mount_id}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/generic_endpoint#namespace EphemeralVaultGenericEndpoint#namespace}

---

##### `PathWrapTtl`<sup>Optional</sup> <a name="PathWrapTtl" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.pathWrapTtl"></a>

```go
PathWrapTtl *string
```

- *Type:* *string

The TTL for the wrapped response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/generic_endpoint#path_wrap_ttl EphemeralVaultGenericEndpoint#path_wrap_ttl}

---

##### `WriteFields`<sup>Optional</sup> <a name="WriteFields" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.writeFields"></a>

```go
WriteFields *[]*string
```

- *Type:* *[]*string

Top-level fields returned by the write operation to extract and expose via write_data/write_data_json.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/generic_endpoint#write_fields EphemeralVaultGenericEndpoint#write_fields}

---



