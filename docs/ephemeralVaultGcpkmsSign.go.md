# `ephemeralVaultGcpkmsSign` Submodule <a name="`ephemeralVaultGcpkmsSign` Submodule" id="@cdktn/provider-vault.ephemeralVaultGcpkmsSign"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralVaultGcpkmsSign <a name="EphemeralVaultGcpkmsSign" id="@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcpkms_sign vault_gcpkms_sign}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/ephemeralvaultgcpkmssign"

ephemeralvaultgcpkmssign.NewEphemeralVaultGcpkmsSign(scope Construct, id *string, config EphemeralVaultGcpkmsSignConfig) EphemeralVaultGcpkmsSign
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSignConfig">EphemeralVaultGcpkmsSignConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSignConfig">EphemeralVaultGcpkmsSignConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.toTerraform">ToTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.resetMountId">ResetMountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this ephemeral resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetMountId` <a name="ResetMountId" id="@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.resetMountId"></a>

```go
func ResetMountId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.resetNamespace"></a>

```go
func ResetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.isTerraformEphemeralResource">IsTerraformEphemeralResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/ephemeralvaultgcpkmssign"

ephemeralvaultgcpkmssign.EphemeralVaultGcpkmsSign_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/ephemeralvaultgcpkmssign"

ephemeralvaultgcpkmssign.EphemeralVaultGcpkmsSign_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformEphemeralResource` <a name="IsTerraformEphemeralResource" id="@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.isTerraformEphemeralResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/ephemeralvaultgcpkmssign"

ephemeralvaultgcpkmssign.EphemeralVaultGcpkmsSign_IsTerraformEphemeralResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.property.signature">Signature</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.property.digestInput">DigestInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.property.keyNameInput">KeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.property.keyVersionInput">KeyVersionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.property.mountIdInput">MountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.property.mountInput">MountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.property.digest">Digest</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.property.keyName">KeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.property.keyVersion">KeyVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.property.mount">Mount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.property.mountId">MountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.property.lifecycle"></a>

```go
func Lifecycle() TerraformEphemeralResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Signature`<sup>Required</sup> <a name="Signature" id="@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.property.signature"></a>

```go
func Signature() *string
```

- *Type:* *string

---

##### `DigestInput`<sup>Optional</sup> <a name="DigestInput" id="@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.property.digestInput"></a>

```go
func DigestInput() *string
```

- *Type:* *string

---

##### `KeyNameInput`<sup>Optional</sup> <a name="KeyNameInput" id="@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.property.keyNameInput"></a>

```go
func KeyNameInput() *string
```

- *Type:* *string

---

##### `KeyVersionInput`<sup>Optional</sup> <a name="KeyVersionInput" id="@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.property.keyVersionInput"></a>

```go
func KeyVersionInput() *f64
```

- *Type:* *f64

---

##### `MountIdInput`<sup>Optional</sup> <a name="MountIdInput" id="@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.property.mountIdInput"></a>

```go
func MountIdInput() *string
```

- *Type:* *string

---

##### `MountInput`<sup>Optional</sup> <a name="MountInput" id="@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.property.mountInput"></a>

```go
func MountInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `Digest`<sup>Required</sup> <a name="Digest" id="@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.property.digest"></a>

```go
func Digest() *string
```

- *Type:* *string

---

##### `KeyName`<sup>Required</sup> <a name="KeyName" id="@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.property.keyName"></a>

```go
func KeyName() *string
```

- *Type:* *string

---

##### `KeyVersion`<sup>Required</sup> <a name="KeyVersion" id="@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.property.keyVersion"></a>

```go
func KeyVersion() *f64
```

- *Type:* *f64

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.property.mount"></a>

```go
func Mount() *string
```

- *Type:* *string

---

##### `MountId`<sup>Required</sup> <a name="MountId" id="@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.property.mountId"></a>

```go
func MountId() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSign.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralVaultGcpkmsSignConfig <a name="EphemeralVaultGcpkmsSignConfig" id="@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSignConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSignConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/ephemeralvaultgcpkmssign"

&ephemeralvaultgcpkmssign.EphemeralVaultGcpkmsSignConfig {
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Digest: *string,
	KeyName: *string,
	KeyVersion: *f64,
	Mount: *string,
	MountId: *string,
	Namespace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSignConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSignConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSignConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSignConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSignConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSignConfig.property.digest">Digest</a></code> | <code>*string</code> | Base64-encoded digest to sign. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSignConfig.property.keyName">KeyName</a></code> | <code>*string</code> | Name of the Vault key to use for signing. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSignConfig.property.keyVersion">KeyVersion</a></code> | <code>*f64</code> | Version of the key to use for signing. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSignConfig.property.mount">Mount</a></code> | <code>*string</code> | Path where the GCP KMS secrets engine is mounted. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSignConfig.property.mountId">MountId</a></code> | <code>*string</code> | Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSignConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSignConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSignConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSignConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSignConfig.property.lifecycle"></a>

```go
Lifecycle TerraformEphemeralResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSignConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Digest`<sup>Required</sup> <a name="Digest" id="@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSignConfig.property.digest"></a>

```go
Digest *string
```

- *Type:* *string

Base64-encoded digest to sign.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcpkms_sign#digest EphemeralVaultGcpkmsSign#digest}

---

##### `KeyName`<sup>Required</sup> <a name="KeyName" id="@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSignConfig.property.keyName"></a>

```go
KeyName *string
```

- *Type:* *string

Name of the Vault key to use for signing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcpkms_sign#key_name EphemeralVaultGcpkmsSign#key_name}

---

##### `KeyVersion`<sup>Required</sup> <a name="KeyVersion" id="@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSignConfig.property.keyVersion"></a>

```go
KeyVersion *f64
```

- *Type:* *f64

Version of the key to use for signing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcpkms_sign#key_version EphemeralVaultGcpkmsSign#key_version}

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSignConfig.property.mount"></a>

```go
Mount *string
```

- *Type:* *string

Path where the GCP KMS secrets engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcpkms_sign#mount EphemeralVaultGcpkmsSign#mount}

---

##### `MountId`<sup>Optional</sup> <a name="MountId" id="@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSignConfig.property.mountId"></a>

```go
MountId *string
```

- *Type:* *string

Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcpkms_sign#mount_id EphemeralVaultGcpkmsSign#mount_id}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.ephemeralVaultGcpkmsSign.EphemeralVaultGcpkmsSignConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcpkms_sign#namespace EphemeralVaultGcpkmsSign#namespace}

---



