# `kmipSecretListener` Submodule <a name="`kmipSecretListener` Submodule" id="@cdktn/provider-vault.kmipSecretListener"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KmipSecretListener <a name="KmipSecretListener" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/kmip_secret_listener vault_kmip_secret_listener}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v16/kmipsecretlistener"

kmipsecretlistener.NewKmipSecretListener(scope Construct, id *string, config KmipSecretListenerConfig) KmipSecretListener
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig">KmipSecretListenerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig">KmipSecretListenerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.resetAdditionalClientCas">ResetAdditionalClientCas</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.resetAlsoUseLegacyCa">ResetAlsoUseLegacyCa</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.resetServerHostnames">ResetServerHostnames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.resetServerIps">ResetServerIps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.resetTlsCipherSuites">ResetTlsCipherSuites</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.resetTlsMaxVersion">ResetTlsMaxVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.resetTlsMinVersion">ResetTlsMinVersion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAdditionalClientCas` <a name="ResetAdditionalClientCas" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.resetAdditionalClientCas"></a>

```go
func ResetAdditionalClientCas()
```

##### `ResetAlsoUseLegacyCa` <a name="ResetAlsoUseLegacyCa" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.resetAlsoUseLegacyCa"></a>

```go
func ResetAlsoUseLegacyCa()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetServerHostnames` <a name="ResetServerHostnames" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.resetServerHostnames"></a>

```go
func ResetServerHostnames()
```

##### `ResetServerIps` <a name="ResetServerIps" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.resetServerIps"></a>

```go
func ResetServerIps()
```

##### `ResetTlsCipherSuites` <a name="ResetTlsCipherSuites" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.resetTlsCipherSuites"></a>

```go
func ResetTlsCipherSuites()
```

##### `ResetTlsMaxVersion` <a name="ResetTlsMaxVersion" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.resetTlsMaxVersion"></a>

```go
func ResetTlsMaxVersion()
```

##### `ResetTlsMinVersion` <a name="ResetTlsMinVersion" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.resetTlsMinVersion"></a>

```go
func ResetTlsMinVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a KmipSecretListener resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v16/kmipsecretlistener"

kmipsecretlistener.KmipSecretListener_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v16/kmipsecretlistener"

kmipsecretlistener.KmipSecretListener_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v16/kmipsecretlistener"

kmipsecretlistener.KmipSecretListener_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v16/kmipsecretlistener"

kmipsecretlistener.KmipSecretListener_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a KmipSecretListener resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the KmipSecretListener to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing KmipSecretListener that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/kmip_secret_listener#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the KmipSecretListener to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.additionalClientCasInput">AdditionalClientCasInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.addressInput">AddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.alsoUseLegacyCaInput">AlsoUseLegacyCaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.caInput">CaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.serverHostnamesInput">ServerHostnamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.serverIpsInput">ServerIpsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.tlsCipherSuitesInput">TlsCipherSuitesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.tlsMaxVersionInput">TlsMaxVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.tlsMinVersionInput">TlsMinVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.additionalClientCas">AdditionalClientCas</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.address">Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.alsoUseLegacyCa">AlsoUseLegacyCa</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.ca">Ca</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.serverHostnames">ServerHostnames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.serverIps">ServerIps</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.tlsCipherSuites">TlsCipherSuites</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.tlsMaxVersion">TlsMaxVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.tlsMinVersion">TlsMinVersion</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AdditionalClientCasInput`<sup>Optional</sup> <a name="AdditionalClientCasInput" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.additionalClientCasInput"></a>

```go
func AdditionalClientCasInput() *[]*string
```

- *Type:* *[]*string

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.addressInput"></a>

```go
func AddressInput() *string
```

- *Type:* *string

---

##### `AlsoUseLegacyCaInput`<sup>Optional</sup> <a name="AlsoUseLegacyCaInput" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.alsoUseLegacyCaInput"></a>

```go
func AlsoUseLegacyCaInput() interface{}
```

- *Type:* interface{}

---

##### `CaInput`<sup>Optional</sup> <a name="CaInput" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.caInput"></a>

```go
func CaInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `ServerHostnamesInput`<sup>Optional</sup> <a name="ServerHostnamesInput" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.serverHostnamesInput"></a>

```go
func ServerHostnamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ServerIpsInput`<sup>Optional</sup> <a name="ServerIpsInput" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.serverIpsInput"></a>

```go
func ServerIpsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TlsCipherSuitesInput`<sup>Optional</sup> <a name="TlsCipherSuitesInput" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.tlsCipherSuitesInput"></a>

```go
func TlsCipherSuitesInput() *string
```

- *Type:* *string

---

##### `TlsMaxVersionInput`<sup>Optional</sup> <a name="TlsMaxVersionInput" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.tlsMaxVersionInput"></a>

```go
func TlsMaxVersionInput() *string
```

- *Type:* *string

---

##### `TlsMinVersionInput`<sup>Optional</sup> <a name="TlsMinVersionInput" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.tlsMinVersionInput"></a>

```go
func TlsMinVersionInput() *string
```

- *Type:* *string

---

##### `AdditionalClientCas`<sup>Required</sup> <a name="AdditionalClientCas" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.additionalClientCas"></a>

```go
func AdditionalClientCas() *[]*string
```

- *Type:* *[]*string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.address"></a>

```go
func Address() *string
```

- *Type:* *string

---

##### `AlsoUseLegacyCa`<sup>Required</sup> <a name="AlsoUseLegacyCa" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.alsoUseLegacyCa"></a>

```go
func AlsoUseLegacyCa() interface{}
```

- *Type:* interface{}

---

##### `Ca`<sup>Required</sup> <a name="Ca" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.ca"></a>

```go
func Ca() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `ServerHostnames`<sup>Required</sup> <a name="ServerHostnames" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.serverHostnames"></a>

```go
func ServerHostnames() *[]*string
```

- *Type:* *[]*string

---

##### `ServerIps`<sup>Required</sup> <a name="ServerIps" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.serverIps"></a>

```go
func ServerIps() *[]*string
```

- *Type:* *[]*string

---

##### `TlsCipherSuites`<sup>Required</sup> <a name="TlsCipherSuites" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.tlsCipherSuites"></a>

```go
func TlsCipherSuites() *string
```

- *Type:* *string

---

##### `TlsMaxVersion`<sup>Required</sup> <a name="TlsMaxVersion" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.tlsMaxVersion"></a>

```go
func TlsMaxVersion() *string
```

- *Type:* *string

---

##### `TlsMinVersion`<sup>Required</sup> <a name="TlsMinVersion" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.tlsMinVersion"></a>

```go
func TlsMinVersion() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### KmipSecretListenerConfig <a name="KmipSecretListenerConfig" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v16/kmipsecretlistener"

&kmipsecretlistener.KmipSecretListenerConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Address: *string,
	Ca: *string,
	Name: *string,
	Path: *string,
	AdditionalClientCas: *[]*string,
	AlsoUseLegacyCa: interface{},
	Namespace: *string,
	ServerHostnames: *[]*string,
	ServerIps: *[]*string,
	TlsCipherSuites: *string,
	TlsMaxVersion: *string,
	TlsMinVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.address">Address</a></code> | <code>*string</code> | Host:port address to listen on. |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.ca">Ca</a></code> | <code>*string</code> | Name of the CA to use to generate the server certificate and verify client certificates. |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.name">Name</a></code> | <code>*string</code> | Unique name for the listener. |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.path">Path</a></code> | <code>*string</code> | Path where KMIP backend is mounted. |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.additionalClientCas">AdditionalClientCas</a></code> | <code>*[]*string</code> | Names of additional TLS CAs to use to verify client certificates. |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.alsoUseLegacyCa">AlsoUseLegacyCa</a></code> | <code>interface{}</code> | Use the legacy unnamed CA for verifying client certificates as well. |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.serverHostnames">ServerHostnames</a></code> | <code>*[]*string</code> | DNS SANs to include in listener certificate. |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.serverIps">ServerIps</a></code> | <code>*[]*string</code> | IP SANs to include in listener certificate. |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.tlsCipherSuites">TlsCipherSuites</a></code> | <code>*string</code> | TLS cipher suites to allow (does not apply to tls13+). |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.tlsMaxVersion">TlsMaxVersion</a></code> | <code>*string</code> | Maximum TLS version to accept (tls12 or tls13). |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.tlsMinVersion">TlsMinVersion</a></code> | <code>*string</code> | Minimum TLS version to accept (tls12 or tls13). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.address"></a>

```go
Address *string
```

- *Type:* *string

Host:port address to listen on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/kmip_secret_listener#address KmipSecretListener#address}

---

##### `Ca`<sup>Required</sup> <a name="Ca" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.ca"></a>

```go
Ca *string
```

- *Type:* *string

Name of the CA to use to generate the server certificate and verify client certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/kmip_secret_listener#ca KmipSecretListener#ca}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Unique name for the listener.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/kmip_secret_listener#name KmipSecretListener#name}

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.path"></a>

```go
Path *string
```

- *Type:* *string

Path where KMIP backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/kmip_secret_listener#path KmipSecretListener#path}

---

##### `AdditionalClientCas`<sup>Optional</sup> <a name="AdditionalClientCas" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.additionalClientCas"></a>

```go
AdditionalClientCas *[]*string
```

- *Type:* *[]*string

Names of additional TLS CAs to use to verify client certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/kmip_secret_listener#additional_client_cas KmipSecretListener#additional_client_cas}

---

##### `AlsoUseLegacyCa`<sup>Optional</sup> <a name="AlsoUseLegacyCa" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.alsoUseLegacyCa"></a>

```go
AlsoUseLegacyCa interface{}
```

- *Type:* interface{}

Use the legacy unnamed CA for verifying client certificates as well.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/kmip_secret_listener#also_use_legacy_ca KmipSecretListener#also_use_legacy_ca}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/kmip_secret_listener#namespace KmipSecretListener#namespace}

---

##### `ServerHostnames`<sup>Optional</sup> <a name="ServerHostnames" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.serverHostnames"></a>

```go
ServerHostnames *[]*string
```

- *Type:* *[]*string

DNS SANs to include in listener certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/kmip_secret_listener#server_hostnames KmipSecretListener#server_hostnames}

---

##### `ServerIps`<sup>Optional</sup> <a name="ServerIps" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.serverIps"></a>

```go
ServerIps *[]*string
```

- *Type:* *[]*string

IP SANs to include in listener certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/kmip_secret_listener#server_ips KmipSecretListener#server_ips}

---

##### `TlsCipherSuites`<sup>Optional</sup> <a name="TlsCipherSuites" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.tlsCipherSuites"></a>

```go
TlsCipherSuites *string
```

- *Type:* *string

TLS cipher suites to allow (does not apply to tls13+).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/kmip_secret_listener#tls_cipher_suites KmipSecretListener#tls_cipher_suites}

---

##### `TlsMaxVersion`<sup>Optional</sup> <a name="TlsMaxVersion" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.tlsMaxVersion"></a>

```go
TlsMaxVersion *string
```

- *Type:* *string

Maximum TLS version to accept (tls12 or tls13).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/kmip_secret_listener#tls_max_version KmipSecretListener#tls_max_version}

---

##### `TlsMinVersion`<sup>Optional</sup> <a name="TlsMinVersion" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.tlsMinVersion"></a>

```go
TlsMinVersion *string
```

- *Type:* *string

Minimum TLS version to accept (tls12 or tls13).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/kmip_secret_listener#tls_min_version KmipSecretListener#tls_min_version}

---



