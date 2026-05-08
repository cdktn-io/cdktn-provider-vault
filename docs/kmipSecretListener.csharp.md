# `kmipSecretListener` Submodule <a name="`kmipSecretListener` Submodule" id="@cdktn/provider-vault.kmipSecretListener"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KmipSecretListener <a name="KmipSecretListener" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/kmip_secret_listener vault_kmip_secret_listener}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new KmipSecretListener(Construct Scope, string Id, KmipSecretListenerConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig">KmipSecretListenerConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.Initializer.parameter.config"></a>

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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAdditionalClientCas` <a name="ResetAdditionalClientCas" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.resetAdditionalClientCas"></a>

```csharp
private void ResetAdditionalClientCas()
```

##### `ResetAlsoUseLegacyCa` <a name="ResetAlsoUseLegacyCa" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.resetAlsoUseLegacyCa"></a>

```csharp
private void ResetAlsoUseLegacyCa()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetServerHostnames` <a name="ResetServerHostnames" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.resetServerHostnames"></a>

```csharp
private void ResetServerHostnames()
```

##### `ResetServerIps` <a name="ResetServerIps" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.resetServerIps"></a>

```csharp
private void ResetServerIps()
```

##### `ResetTlsCipherSuites` <a name="ResetTlsCipherSuites" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.resetTlsCipherSuites"></a>

```csharp
private void ResetTlsCipherSuites()
```

##### `ResetTlsMaxVersion` <a name="ResetTlsMaxVersion" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.resetTlsMaxVersion"></a>

```csharp
private void ResetTlsMaxVersion()
```

##### `ResetTlsMinVersion` <a name="ResetTlsMinVersion" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.resetTlsMinVersion"></a>

```csharp
private void ResetTlsMinVersion()
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

```csharp
using Io.Cdktn.Providers.Vault;

KmipSecretListener.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Vault;

KmipSecretListener.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Vault;

KmipSecretListener.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Vault;

KmipSecretListener.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a KmipSecretListener resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the KmipSecretListener to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing KmipSecretListener that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/kmip_secret_listener#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the KmipSecretListener to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.additionalClientCasInput">AdditionalClientCasInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.addressInput">AddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.alsoUseLegacyCaInput">AlsoUseLegacyCaInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.caInput">CaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.serverHostnamesInput">ServerHostnamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.serverIpsInput">ServerIpsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.tlsCipherSuitesInput">TlsCipherSuitesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.tlsMaxVersionInput">TlsMaxVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.tlsMinVersionInput">TlsMinVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.additionalClientCas">AdditionalClientCas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.address">Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.alsoUseLegacyCa">AlsoUseLegacyCa</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.ca">Ca</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.serverHostnames">ServerHostnames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.serverIps">ServerIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.tlsCipherSuites">TlsCipherSuites</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.tlsMaxVersion">TlsMaxVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.tlsMinVersion">TlsMinVersion</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AdditionalClientCasInput`<sup>Optional</sup> <a name="AdditionalClientCasInput" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.additionalClientCasInput"></a>

```csharp
public string[] AdditionalClientCasInput { get; }
```

- *Type:* string[]

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.addressInput"></a>

```csharp
public string AddressInput { get; }
```

- *Type:* string

---

##### `AlsoUseLegacyCaInput`<sup>Optional</sup> <a name="AlsoUseLegacyCaInput" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.alsoUseLegacyCaInput"></a>

```csharp
public bool|IResolvable AlsoUseLegacyCaInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `CaInput`<sup>Optional</sup> <a name="CaInput" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.caInput"></a>

```csharp
public string CaInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `ServerHostnamesInput`<sup>Optional</sup> <a name="ServerHostnamesInput" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.serverHostnamesInput"></a>

```csharp
public string[] ServerHostnamesInput { get; }
```

- *Type:* string[]

---

##### `ServerIpsInput`<sup>Optional</sup> <a name="ServerIpsInput" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.serverIpsInput"></a>

```csharp
public string[] ServerIpsInput { get; }
```

- *Type:* string[]

---

##### `TlsCipherSuitesInput`<sup>Optional</sup> <a name="TlsCipherSuitesInput" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.tlsCipherSuitesInput"></a>

```csharp
public string TlsCipherSuitesInput { get; }
```

- *Type:* string

---

##### `TlsMaxVersionInput`<sup>Optional</sup> <a name="TlsMaxVersionInput" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.tlsMaxVersionInput"></a>

```csharp
public string TlsMaxVersionInput { get; }
```

- *Type:* string

---

##### `TlsMinVersionInput`<sup>Optional</sup> <a name="TlsMinVersionInput" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.tlsMinVersionInput"></a>

```csharp
public string TlsMinVersionInput { get; }
```

- *Type:* string

---

##### `AdditionalClientCas`<sup>Required</sup> <a name="AdditionalClientCas" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.additionalClientCas"></a>

```csharp
public string[] AdditionalClientCas { get; }
```

- *Type:* string[]

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.address"></a>

```csharp
public string Address { get; }
```

- *Type:* string

---

##### `AlsoUseLegacyCa`<sup>Required</sup> <a name="AlsoUseLegacyCa" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.alsoUseLegacyCa"></a>

```csharp
public bool|IResolvable AlsoUseLegacyCa { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Ca`<sup>Required</sup> <a name="Ca" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.ca"></a>

```csharp
public string Ca { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `ServerHostnames`<sup>Required</sup> <a name="ServerHostnames" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.serverHostnames"></a>

```csharp
public string[] ServerHostnames { get; }
```

- *Type:* string[]

---

##### `ServerIps`<sup>Required</sup> <a name="ServerIps" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.serverIps"></a>

```csharp
public string[] ServerIps { get; }
```

- *Type:* string[]

---

##### `TlsCipherSuites`<sup>Required</sup> <a name="TlsCipherSuites" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.tlsCipherSuites"></a>

```csharp
public string TlsCipherSuites { get; }
```

- *Type:* string

---

##### `TlsMaxVersion`<sup>Required</sup> <a name="TlsMaxVersion" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.tlsMaxVersion"></a>

```csharp
public string TlsMaxVersion { get; }
```

- *Type:* string

---

##### `TlsMinVersion`<sup>Required</sup> <a name="TlsMinVersion" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.tlsMinVersion"></a>

```csharp
public string TlsMinVersion { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KmipSecretListenerConfig <a name="KmipSecretListenerConfig" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new KmipSecretListenerConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Address,
    string Ca,
    string Name,
    string Path,
    string[] AdditionalClientCas = null,
    bool|IResolvable AlsoUseLegacyCa = null,
    string Namespace = null,
    string[] ServerHostnames = null,
    string[] ServerIps = null,
    string TlsCipherSuites = null,
    string TlsMaxVersion = null,
    string TlsMinVersion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.address">Address</a></code> | <code>string</code> | Host:port address to listen on. |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.ca">Ca</a></code> | <code>string</code> | Name of the CA to use to generate the server certificate and verify client certificates. |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.name">Name</a></code> | <code>string</code> | Unique name for the listener. |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.path">Path</a></code> | <code>string</code> | Path where KMIP backend is mounted. |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.additionalClientCas">AdditionalClientCas</a></code> | <code>string[]</code> | Names of additional TLS CAs to use to verify client certificates. |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.alsoUseLegacyCa">AlsoUseLegacyCa</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Use the legacy unnamed CA for verifying client certificates as well. |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.serverHostnames">ServerHostnames</a></code> | <code>string[]</code> | DNS SANs to include in listener certificate. |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.serverIps">ServerIps</a></code> | <code>string[]</code> | IP SANs to include in listener certificate. |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.tlsCipherSuites">TlsCipherSuites</a></code> | <code>string</code> | TLS cipher suites to allow (does not apply to tls13+). |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.tlsMaxVersion">TlsMaxVersion</a></code> | <code>string</code> | Maximum TLS version to accept (tls12 or tls13). |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.tlsMinVersion">TlsMinVersion</a></code> | <code>string</code> | Minimum TLS version to accept (tls12 or tls13). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.address"></a>

```csharp
public string Address { get; set; }
```

- *Type:* string

Host:port address to listen on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/kmip_secret_listener#address KmipSecretListener#address}

---

##### `Ca`<sup>Required</sup> <a name="Ca" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.ca"></a>

```csharp
public string Ca { get; set; }
```

- *Type:* string

Name of the CA to use to generate the server certificate and verify client certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/kmip_secret_listener#ca KmipSecretListener#ca}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Unique name for the listener.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/kmip_secret_listener#name KmipSecretListener#name}

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Path where KMIP backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/kmip_secret_listener#path KmipSecretListener#path}

---

##### `AdditionalClientCas`<sup>Optional</sup> <a name="AdditionalClientCas" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.additionalClientCas"></a>

```csharp
public string[] AdditionalClientCas { get; set; }
```

- *Type:* string[]

Names of additional TLS CAs to use to verify client certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/kmip_secret_listener#additional_client_cas KmipSecretListener#additional_client_cas}

---

##### `AlsoUseLegacyCa`<sup>Optional</sup> <a name="AlsoUseLegacyCa" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.alsoUseLegacyCa"></a>

```csharp
public bool|IResolvable AlsoUseLegacyCa { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Use the legacy unnamed CA for verifying client certificates as well.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/kmip_secret_listener#also_use_legacy_ca KmipSecretListener#also_use_legacy_ca}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/kmip_secret_listener#namespace KmipSecretListener#namespace}

---

##### `ServerHostnames`<sup>Optional</sup> <a name="ServerHostnames" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.serverHostnames"></a>

```csharp
public string[] ServerHostnames { get; set; }
```

- *Type:* string[]

DNS SANs to include in listener certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/kmip_secret_listener#server_hostnames KmipSecretListener#server_hostnames}

---

##### `ServerIps`<sup>Optional</sup> <a name="ServerIps" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.serverIps"></a>

```csharp
public string[] ServerIps { get; set; }
```

- *Type:* string[]

IP SANs to include in listener certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/kmip_secret_listener#server_ips KmipSecretListener#server_ips}

---

##### `TlsCipherSuites`<sup>Optional</sup> <a name="TlsCipherSuites" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.tlsCipherSuites"></a>

```csharp
public string TlsCipherSuites { get; set; }
```

- *Type:* string

TLS cipher suites to allow (does not apply to tls13+).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/kmip_secret_listener#tls_cipher_suites KmipSecretListener#tls_cipher_suites}

---

##### `TlsMaxVersion`<sup>Optional</sup> <a name="TlsMaxVersion" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.tlsMaxVersion"></a>

```csharp
public string TlsMaxVersion { get; set; }
```

- *Type:* string

Maximum TLS version to accept (tls12 or tls13).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/kmip_secret_listener#tls_max_version KmipSecretListener#tls_max_version}

---

##### `TlsMinVersion`<sup>Optional</sup> <a name="TlsMinVersion" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.tlsMinVersion"></a>

```csharp
public string TlsMinVersion { get; set; }
```

- *Type:* string

Minimum TLS version to accept (tls12 or tls13).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/kmip_secret_listener#tls_min_version KmipSecretListener#tls_min_version}

---



